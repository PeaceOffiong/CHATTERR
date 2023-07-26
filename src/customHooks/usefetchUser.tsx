import { useState, useEffect } from "react";
import { db } from '@/firebase/firebaseConfig';
import { collection, query, where, getDocs } from 'firebase/firestore';

const fetchUser = async (email:string) => {
    const [specificUser, setSpecificUser] = useState<any[]>([]);
            try {
                const q = query(collection(db, 'Users'), where('email', '==', email));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const userDoc = querySnapshot.docs[0];
                    const user = userDoc.data();
                    setSpecificUser([user]);             
                } else {
                    return null;
                }
            } catch (error) {
                console.error('Error getting user from Firestore:', error);
                return null;
            }

    return  specificUser ;
}

export default fetchUser;
