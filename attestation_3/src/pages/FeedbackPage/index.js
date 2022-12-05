import React from 'react';
import PageLayout from '../../components/PageLayout';
import s from './feedback_page.module.css';
import FeedbackForm from '../../components/FeedbackForm';

FeedbackPage.propTypes = {};

function FeedbackPage({ counts }) {
    return (
        <PageLayout counts={counts}>
            <div className={s.main}>
                <FeedbackForm />
            </div>
        </PageLayout>

    );
}

export default FeedbackPage;