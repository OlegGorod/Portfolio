import {openModal, closeModal} from './modal';
import {postData} from '../services/services';

function forms (formSelector, modalTimerId) {
    const message = {
        loading: 'wait',
        success: 'Your post has sent',
        failure: 'something wrong'
    };

    const forms = document.querySelectorAll(formSelector);

    forms.forEach(form => {
        bindPostData(form);
    });

    function bindPostData(data) {
        data.addEventListener('submit', (e) => {
            e.preventDefault();

            const statusMessage = '';
            const formData = new FormData(data);

            const json = JSON.stringify(Object.fromEntries(formData.entries()));

            postData('http://localhost:3000/requests', json)
                .then(data => {
                    console.log(data);
                    showThanksModal(message.success);
                })
                .catch(() => {
                    statusMessage.textcontent = message.failure;
                })
                .finally(() => {
                    data.reset();
                });
        });
    }

    function showThanksModal(message) {
        const modal = document.querySelector('.modal__dialog');
        modal.classList.add('hide');
        openModal('.modal', modalTimerId);

        const nextThanksModal = document.querySelector('div');
        nextThanksModal.classList.add('modal__dialog');

        nextThanksModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close">&times;</div>
                <div class="modal__title">${message}</div>
            </div>
        `;

        document.querySelector('.modal').append(nextThanksModal);

        setTimeout(() => {
            nextThanksModal.remove();
            modal.classList.add('show');
            modal.classList.remove('hide');
            closeModal('.modal');
        }, 6000);
    }


}

export default forms;