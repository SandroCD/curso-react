import { db } from "../firebase/config.js"

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut
} from 'firebase/auth';

import { useState, useEffect } from 'react'

export const useAuthentication = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)

    // CLEANUP
    // DEAL WITH MEMORY LEAK
    const [cancelled, setCancelled] = useState(false)

    const auth = getAuth()

    function checkIfIsCancelled() {
        if (cancelled) {
            return;
        }
    }

    const createUser = async (data) => {
        checkIfIsCancelled();

        setLoading(true);
        setError(null);

        try {
            
            const{ user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            )

            await updateProfile(user, {
                displayName: data.displayName
            });

            setLoading(false);

          return user;
        } catch (error) {
            console.log(error.message);
            console.log(typeof error.message);

                let systemErrorMessage

                if (error.message.includes("Password")) {
                    systemErrorMessage = "A senha precisa ter no mínimo 6 caracteres!"
                } else if (error.message.includes("email-already")) {
                    systemErrorMessage = "E-mail já cadastrado!"
                } else {
                    systemErrorMessage = "Ocorreu um erro, tente mais tarde!"
                }

                setLoading(false);
                setError(systemErrorMessage);
        }
    };

    // LOGOUT
    const logout = () => {
        checkIfIsCancelled();

        signOut(auth);
    };


    useEffect (() => {
        return() => setCancelled(true);
    }, []);

    return {
        auth,
        createUser,
        error,
        loading,
        logout
    };
};