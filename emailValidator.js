function emailValidator(email) {
	return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}