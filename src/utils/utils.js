const firebaseErrorUserMssg = (error) => {
	if(error.code === 'auth/wrong-password') {
		return('Please check the Password');
	}else if(error.code === 'auth/user-not-found') {
		return('No account registered with that email.');
	}else if(error.code === 'auth/email-already-in-use') {
		return('An account with that email already exists.');
	}else if(error.code === 'auth/weak-password') {
		return('Provide a stronger password.');
	}else {
		console.log(error.code);
		return('Unexpected error');
	}
}

/*function handleAuthSubmit(e) {
	e.preventDefault();
	const authentication = getAuth();
	let email = e.target.email.value;
	let password = e.target.password.value;

	createUserWithEmailAndPassword(authentication, email, password)
	.then((response) => {
		console.log(response);
		sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
	})
	.catch(function (error) {
		// handle error
		console.log('[ERROR] On Firebase create user...', error);
		return("error");
	});
}*/

export { firebaseErrorUserMssg };