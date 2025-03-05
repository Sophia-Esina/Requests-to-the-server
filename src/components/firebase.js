import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
	apiKey: 'AIzaSyDaBkWbhXu8N7yQ7HYi5kzJI9EiJM12B9s',
	authDomain: 'requests-to-the-server.firebaseapp.com',
	projectId: 'requests-to-the-server',
	storageBucket: 'requests-to-the-server.firebasestorage.app',
	messagingSenderId: '700443726102',
	appId: '1:700443726102:web:0a490e5a42b94ff1138037',
	databaseURL:
		'https://requests-to-the-server-default-rtdb.asia-southeast1.firebasedatabase.app/',
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
