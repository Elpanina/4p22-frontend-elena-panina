import React, {useEffect, useState} from 'react';
import s from './feedback_form.module.css';
import FormInputBlock from '../FormInputBlock';
import FormRadioBlock from '../FormRadioBlock';
import FormCheckboxBlock from '../FormCheckboxBlock';
import FormTextBlock from '../FormTextBlock';
import {emailIsValid, fileIsAvailable, nameIsValid} from '../../utils/validation';

const RADIO_OPTIONS = [
    { id: 'yes-option', value: 'yes', label: 'Понравилось'},
    { id: 'no-option', value: 'no', label: 'Не понравилось'},
    { id: 'mid-option', value: 'dontknow', label: 'Пока не понял(а)'},
];

function FeedbackForm() {

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [file, setFile] = useState('');
    const [radio, setRadio] = useState('yes');
    const [checkbox, setCheckbox] = useState(false);
    const [story, setStory] = useState('');
    const [errors, setErrors] = useState({});

    function invalidHandler(event) {
        event.preventDefault();
        event.stopPropagation();
    }

    function deleteStateField(prevState, fieldName) {
        const newState = {...prevState};
        delete newState[fieldName];
        return newState;
    }

    // стираем сообщение об ошибке если изменилось проверяемое поле
    useEffect(() => {
        setErrors(prevState => deleteStateField(prevState, 'email'));  // вроде должно работать...
    }, [email])

    useEffect(() => {
        setErrors(prevState => deleteStateField(prevState, 'name'));
    }, [name])

    useEffect(() => {
        setErrors(prevState => deleteStateField(prevState, 'story'));
    }, [story])

    useEffect(() => {
        setErrors(prevState => deleteStateField(prevState, 'file'));
    }, [file])

    function validateAndSubmit(event) {
        event.preventDefault();
        const toErrors = {};
        if (!email || email.length === 0) {
            toErrors.email = 'Email не введён';
        } else if (!emailIsValid(email)) {
            toErrors.email = 'Некорректный email';
        }

        if (!name || name.length === 0) {
            toErrors.name = 'Имя не введено';
        } else if (name.length < 3) {
            toErrors.name = 'Имя меньше 3 букв';
        } else if (!nameIsValid(name)) {
            toErrors.name = 'Некорректные символы';
        }

        if (file && file.length > 0) {
            if (file.length === 0) {
                toErrors.file = 'Фото не приложено';
            } else if (!fileIsAvailable(file)) {
                toErrors.file = 'Недопустимый формат';
            }
        }

        if (!story || story.length === 0) {
            toErrors.story = 'Сообщение не введено';
        } else if (story.length < 30) {
            toErrors.story = 'Сообщение меньше 30 букв';
        }
        const result = {...errors, ...toErrors};
        const errCount = Object.values(result).length;

        // если есть ошибки, незачем на алерт отвлекать
        if (!checkbox && errCount === 0) {
            setTimeout(() => alert('Мы не можем обрабатывать данные без вашего согласия. Пожалуйста, подтвердите его, чтобы продолжить'), 10);
        } else if (errCount === 0) {
            const outside = { name, email, compliment: radio, story, file, agree: checkbox };
            setName('');
            setEmail('');
            setRadio('yes');
            setStory('');
            setFile('');
            setCheckbox(false);
            console.log('#formData: ', outside);
        } else {
            setErrors(result);
        }
    }

    return (
        <div className={s.main__formWrapper}>
            <form action="/404.html" method="post" id="feedback-form" target="_blank" className={s.form} onSubmit={validateAndSubmit} onInvalid={invalidHandler}>
                <h1 className={s.formWrapper__title}>Обратная связь</h1>
                <FormInputBlock cmp_name={'email'}
                                id={'email-input'}
                                label={'Ваш Email'}
                                type={'email'}
                                state={email}
                                setState={setEmail}
                                errorMessage={errors?.email}
                                required={true}
                                placeholder={'Введите электронную почту'}/>
                <FormInputBlock cmp_name={'appeal'}
                                label={'Ваше имя'}
                                id={'appeal-message'}
                                type={'text'}
                                state={name}
                                setState={setName}
                                errorMessage={errors?.name}
                                required={true}
                                placeholder={'Как к вам обращаться'}/>
                <FormRadioBlock label={'Вам понравилось покупать у нас?'}
                                name={'variants'}
                                state={radio}
                                setState={setRadio}
                                options={RADIO_OPTIONS}/>
                <FormTextBlock  state={story}
                                setState={setStory}
                                errorMessage={errors?.story}
                                required={true}
                                placeholder={'Сообщение не меньше 30 символов'}
                                label='Сообщение'/>
                <FormInputBlock cmp_name={'files'}
                                label={'Приложите фото'}
                                id={'files-input'}
                                type={'file'}
                                state={file}
                                setState={setFile}
                                errorMessage={errors?.file}
                                placeholder={'Добавьте фото'}/>
                <FormCheckboxBlock id={'agreement'}
                                   name={'agreement'}
                                   label={'Я даю согласие на обработку персональных данных'}
                                   state={checkbox}
                                   setState={setCheckbox}/>
                <div className={s.formWrapper__buttonBloсk}>
                    <button type="submit" id="register-button" className={s.buttonBloсk__enter}>Отправить</button>
                </div>
            </form>
        </div>
    );
}

export default FeedbackForm;