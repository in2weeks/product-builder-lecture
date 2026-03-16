
document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generate-btn');
    const numberElements = document.querySelectorAll('.number');
    const themeToggle = document.getElementById('theme-toggle');

    // 저장된 테마 불러오기
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.textContent = '🌙';
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.textContent = '☀️';
            localStorage.setItem('theme', 'dark');
        }
    });

    function generateLottoNumbers() {
        const numbers = new Set();
        while (numbers.size < 6) {
            const randomNum = Math.floor(Math.random() * 45) + 1;
            numbers.add(randomNum);
        }
        return Array.from(numbers);
    }

    function displayNumbers(numbers) {
        numberElements.forEach((element, index) => {
            element.textContent = numbers[index];
            element.style.transform = 'translateY(20px)';
            element.style.opacity = 0;
            setTimeout(() => {
                element.style.transform = 'translateY(0)';
                element.style.opacity = 1;
            }, index * 100);
        });
    }

    function generateAndDisplay() {
        const lottoNumbers = generateLottoNumbers();
        displayNumbers(lottoNumbers);
    }

    generateBtn.addEventListener('click', generateAndDisplay);

    // Initial generation
    generateAndDisplay();
});
