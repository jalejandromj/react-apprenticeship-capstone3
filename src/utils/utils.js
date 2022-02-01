const firebaseErrorUserMssg = (error) => {
	if(error.code === 'auth/wrong-password') {
		return('Email or password is not correct.');
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

export { firebaseErrorUserMssg };