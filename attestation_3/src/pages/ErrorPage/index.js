import s from './error_page.module.css';
import {Link, useRouteError} from 'react-router-dom';

function ErrorPage() {
    const error = useRouteError();
    console.error(error);

    return (
        <div className={s.main}>
            <div className={s.middle_box}>
                <div className={s.caption}>
                    <h1>{ error && error.status ? error.status : 'Oops!'}</h1>
                    <p>Sorry, an unexpected error has occurred.</p>
                    {
                        error &&
                        <p>
                            <i>{error.statusText || error.message || error.data }</i>
                        </p>
                    }
                    <Link to="/home">Try to go home</Link>
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;