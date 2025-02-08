import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { collection, addDoc } from '@firebase/firestore';

const firebaseConfig = {
        apiKey: 'AIzaSyBiEOOtM2oiEDcY-D7xe3HPJrtIJ1Nv4BQ',
        authDomain: 'portfolio-9cb4d.firebaseapp.com',
        projectId: 'portfolio-9cb4d',
        storageBucket: 'portfolio-9cb4d.firebasestorage.app',
        messagingSenderId: '737298760011',
        appId: '1:737298760011:web:0980d33534a1d24dd028ce',
        measurementId: 'G-YFQMF7YMNG',
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };
