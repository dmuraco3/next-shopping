import styles from './auth.module.scss'
import {getSession, signIn, useSession} from 'next-auth/client'
import {useState} from 'react'
import CountrySelect from '../../components/auth/form/CountrySelect'
import {randomBytes, createHash} from 'crypto';

export default function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })
    const [error, setError] = useState(null)
    const [session, status] = useSession({
        onUnauthenticated() {
            console.log("not authenticated")
        }
    })
    
    const updateFormData = (e) => {
        setFormData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const genHash = (password, email) => {
        const salt = createHash('sha256').update(email).digest('hex');
        const hash = createHash('sha256').update(password).update(salt).digest("hex")
        return hash
    }

    const postForm = (e) => {
        e.preventDefault()
        const data = {
            email: formData.email,
            password: genHash(formData.password, formData.email),
            type: "SignIn",
        }
        signIn('credentials', {redirect: false, ...data})
    }


    return (
        <div className={styles.FormContainer}>
            <form className={styles.Form}>
                <div className={styles.FormGroup}>
                    <input type="email" name="email" id="email" placeholder="Email Address" onChange={updateFormData} formNoValidate/>
                </div>
                <div className={styles.FormGroup}>
                    <input type="password" name="password" id="password" placeholder="password" onChange={updateFormData}/>
                </div>
                <div className={styles.FormGroup}>
                    <button onClick={postForm}>Sign in</button>
                </div>
                
            </form>
        </div>
    )
}