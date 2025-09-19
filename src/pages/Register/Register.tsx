import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/Button'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'

import omit from 'lodash/omit'

import type { Schema } from '../../utils/rules'
import { schema } from '../../utils/rules'
import Input from '../../components/Input'
import authApi from '../../apis/auth.api'
import { isAxiosUnprocessableEntityError } from '../../utils/utils'
import type { ErrorResponse } from '../../types/utils.type'
import { useContext } from 'react'
import { AppContext } from '../../contexts/app.context'
import { Helmet } from 'react-helmet-async'

type FormData = Pick<Schema, 'username' | 'email' | 'password' | 'confirm_password'>
const registerSchema = schema.pick(['username', 'email', 'password', 'confirm_password'])

const Login: React.FC = () => {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(registerSchema)
  })
  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'confirm_password'>) => authApi.registerAccount(body)
  })
  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['confirm_password'])
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        setIsAuthenticated(true)
        setProfile(data.data.data.user)
        navigate('/')
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntityError<ErrorResponse<Omit<FormData, 'confirm_password'>>>(error)) {
          const formError = error.response?.data.data
          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'confirm_password'>, {
                message: formError[key as keyof Omit<FormData, 'confirm_password'>],
                type: 'Server'
              })
            })
          }
        }
      }
    })
  })

  return (
    <div className='flex flex-col items-center justify-center bg-gray-100'>
      <Helmet>
        <title>Đăng ký | BKAC</title>
        <meta name='description' content='Đăng ký tài khoản vào BKAC' />
      </Helmet>
      <div className='flex flex-col items-center justify-center min-h-[80vh] bg-gray-100'>
        <h2 className='text-2xl font-bold mb-6 text-center'>Đăng ký</h2>
        <form className='flex flex-col w-80 bg-white p-6 rounded-xl shadow-md' onSubmit={onSubmit}>
          <Input
            name='username'
            register={register}
            type='username'
            className='mt-2'
            errorMessage={errors.username?.message}
            placeholder='Username'
          />
          <Input
            name='password'
            register={register}
            type='password'
            className='mt-2'
            classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
            errorMessage={errors.password?.message}
            placeholder='Password'
            autoComplete='on'
          />
          <Input
            name='confirm_password'
            register={register}
            type='password'
            className='mt-2'
            classNameEye='absolute right-[5px] h-5 w-5 cursor-pointer top-[12px]'
            errorMessage={errors.confirm_password?.message}
            placeholder='Confirm Password'
            autoComplete='on'
          />
          <Button
            className='bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition mt-4'
            isLoading={registerAccountMutation.isPending}
            disabled={registerAccountMutation.isPending}
          >
            Đăng ký
          </Button>
          <div className='mt-8 flex items-center justify-center'>
            <span className='text-gray-400'>Bạn đã có tài khoản?</span>
            <Link to='/Login' className='ml-1 text-blue-600 hover:text-blue-800 visited:text-purple-600'>
              Đăng nhập
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
