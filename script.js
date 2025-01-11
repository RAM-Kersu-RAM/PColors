// feature-section

const percentages = document.querySelectorAll('.percentage');
  
    const startCounting = (percentageElement, min, max, delay) => {
      const updateCount = () => {
        const target = Math.floor(Math.random() * (max - min + 1)) + min; // اختيار نسبة عشوائية بين min و max
        let count = 0;
        const speed = 30; // سرعة العد الثابتة
        const incrementCount = () => {
          if (count < target) {
            count += 1; // زيادة بمقدار 1
            percentageElement.innerText = count + '%';
            setTimeout(incrementCount, speed);
          } else {
            percentageElement.innerText = target + '%';
            setTimeout(() => startCounting(percentageElement, min, max, delay), delay); // إعادة العد بعد التأخير
          }
        };
        incrementCount();
      };
      updateCount();
    };
  
    percentages.forEach(percentage => {
      startCounting(percentage, 80, 100, 3000); // العد بين 80% و100% مع انتظار 3 ثوانٍ قبل إعادة العد
    });


// Back to top button functionality

const backToTopButton = document.createElement('button');
backToTopButton.id = 'backToTop';
backToTopButton.title = 'الرجوع للأعلى';
backToTopButton.innerText = '⬆'; // رمز السهم
document.body.appendChild(backToTopButton);

// إظهار الزر عند التمرير
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) { // ظهور الزر عند تجاوز 300px
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// الانتقال للأعلى عند الضغط على الزر
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});