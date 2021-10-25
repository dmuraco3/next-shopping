import styles from './auth.module.scss'
import {getSession, signIn, useSession} from 'next-auth/client'
import {useState} from 'react'
import CountrySelect from '../../components/auth/form/CountrySelect'
import {randomBytes, createHash} from 'crypto';

export default function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        fname: '',
        lname: '',
        date: '',
        country: '',
        gender: '',
        news:true
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
        const fullHash = hash+salt;
        return hash
    }

    const postForm = (e) => {
        e.preventDefault()
        const data = {
            email: formData.email,
            password: genHash(formData.password, formData.email),
            fname: formData.fname,
            lname: formData.lname,
            date: formData.date,
            country: formData.country,
            gender: formData.gender,
            news: formData.news,
            type: "SignUp",
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
                    <input type="text" name="fname" placeholder="First Name" onChange={updateFormData}/> 
                </div>
                <div className={styles.FormGroup}>
                    <input type="text" name="lname" placeholder="Last Name" onChange={updateFormData}/> 
                </div>
                <div className={styles.FormGroup}>
                    <input type="date" placeholder="Date of Birth" name="date" max={new Date().toISOString().split("T")[0]} onChange={updateFormData}/> 
                </div>
                <div className={styles.FormGroup}>
                    <CountrySelect name="country" onChange={updateFormData}/>
                </div>
                <div className={styles.FormGroup}>
                    <div className={styles.FormGenderControllers}>
                        <button className={`${styles.FormGenderButton} ${formData.gender == "male" && styles.FormGenderActiveButton}`} onClick={(event) => {
                            event.preventDefault()
                            event.target.name = "gender"
                            event.target.value = "male"
                            updateFormData(event)
                        }}>Male</button>
                        <button className={`${styles.FormGenderButton}  ${formData.gender == "female" && styles.FormGenderActiveButton}`} onClick={(event) => {
                            event.preventDefault()
                            event.target.name = "gender"
                            event.target.value = "female"
                            updateFormData(event)

                        }}>Female</button>

                    </div>
                </div>
                <div className={styles.FormGroup}>
                    <input type="checkbox" name="news" checked={formData.news} onClick={e => {                       
                        if(formData.news) {
                            e.target.value = false
                            e = {
                                target: {
                                    name : "news",
                                    value: false
                                }
                            }
                        }else {
                            e.target.value = true
                            e = {
                                target: {
                                    name : "news",
                                    value: true
                                }
                            }
                        }
                        updateFormData(e)
                    }}/>
                    <label for="news">Sign up for emails to get updates from us on products, offers, and your Member benefits</label>
                </div>
                <div className={styles.FormInfo}>
                    <p>By clicking Sign Up, you agree to our <a href="/somewhere" target="_blank">Terms of Service</a> and <a href="/somewhere" target="_blank">Privacy Policy.</a></p>
                </div>

                <div className={styles.FormGroup}>
                    <button onClick={postForm}>Sign Up</button>
                </div>
                
            </form>
        </div>
    )
}