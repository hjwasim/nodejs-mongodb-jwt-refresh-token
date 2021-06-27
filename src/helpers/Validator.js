export function Validator(errors) {
    if (errors['email']) {
        if (errors['email'].type === 'required') {
            return 'Email Required'
        }
        if (errors['email'].type === 'pattern') {
            return 'Email incorrect format'
        }
    }
    else if (errors['username']) {
        if (errors['username'].type === 'required') {
            return 'Username Required'
        }
        if (errors['username'].type === 'minLength') {
            return 'Username Minimum 6 Characters'
        }
        if (errors['username'].type === 'maxLength') {
            return 'Username Maximum 15 Characters'
        }
    } else if (errors['password']) {
        if (errors['password'].type === 'required') {
            return 'Password Required'
        }
        if (errors['password'].type === 'minLength') {
            return 'Password Minimum 5 Characters'
        }
    }
}