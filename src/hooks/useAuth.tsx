import axios from 'axios'
import { useCallback, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { User } from '../types/user'
import { useMessage } from './useMessage'

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const { showMessage } = useMessage()

    const login = useCallback(
        (id: string) => {
            setIsLoading(true)
            axios
                .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
                .then((res) => {
                    if (res.data) {
                        history.push('/recipes')
                        showMessage({ title: 'Logged in', status: 'success' })
                    } else {
                        showMessage({ title: 'User not found', status: 'error' })
                        setIsLoading(false)
                    }
                })
                .catch(() => {
                    showMessage({ title: 'Login failed', status: 'error' })
                    setIsLoading(false)
                })
        },
        [history, showMessage]
    )
    return { login, isLoading }
}
