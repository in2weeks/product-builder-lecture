document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitBtn = document.getElementById('submit-btn');
    const successMsg = document.getElementById('success-msg');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        submitBtn.disabled = true;
        submitBtn.textContent = '전송 중...';

        try {
            const response = await fetch(form.action, {
                method: 'POST',
                body: new FormData(form),
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                form.classList.add('hidden');
                successMsg.classList.remove('hidden');
            } else {
                alert('전송에 실패했습니다. 잠시 후 다시 시도해주세요.');
                submitBtn.disabled = false;
                submitBtn.textContent = '문의 보내기';
            }
        } catch {
            alert('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
            submitBtn.disabled = false;
            submitBtn.textContent = '문의 보내기';
        }
    });
});
