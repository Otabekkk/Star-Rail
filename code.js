
document.addEventListener('DOMContentLoaded', function() {
    const himeko_normal = document.querySelector('.normal-cha-ico-himeko');
    const himeko_hover = document.querySelector('.hover-cha-ico-himeko');

    himeko_normal.addEventListener('mouseenter', function() {
        himeko_normal.style.display = 'none';
        himeko_hover.style.display = 'block';
    });

    himeko_hover.addEventListener('mouseleave', function() {
        himeko_hover.style.display = 'none';
        himeko_normal.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const himeko_normal = document.querySelector('.normal-cha-ico-velt');
    const himeko_hover = document.querySelector('.hover-cha-ico-velt');

    himeko_normal.addEventListener('mouseenter', function() {
        himeko_normal.style.display = 'none';
        himeko_hover.style.display = 'block';
    });

    himeko_hover.addEventListener('mouseleave', function() {
        himeko_hover.style.display = 'none';
        himeko_normal.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const himeko_normal = document.querySelector('.normal-cha-ico-dan');
    const himeko_hover = document.querySelector('.hover-cha-ico-dan');

    himeko_normal.addEventListener('mouseenter', function() {
        himeko_normal.style.display = 'none';
        himeko_hover.style.display = 'block';
    });

    himeko_hover.addEventListener('mouseleave', function() {
        himeko_hover.style.display = 'none';
        himeko_normal.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const himeko_normal = document.querySelector('.normal-cha-ico-march7');
    const himeko_hover = document.querySelector('.hover-cha-ico-march7');

    himeko_normal.addEventListener('mouseenter', function() {
        himeko_normal.style.display = 'none';
        himeko_hover.style.display = 'block';
    });

    himeko_hover.addEventListener('mouseleave', function() {
        himeko_hover.style.display = 'none';
        himeko_normal.style.display = 'block';
    });
});


// let scroll_btn_next = document.querySelector('.scroll-btn')
// let scroll_btn_back = document.querySelector('.scroll-btn-back')

// let images_array = [
//     'https://webstatic.hoyoverse.com/upload/event/2023/05/10/bec6c7436b8b9f47e60d1e4f212f451f_791750890132205924.png?x-oss-process=image/format,webp/quality,Q_90',
//     'https://act.hoyoverse.com/puzzle/upload/puzzle/2023/05/08/47f1e4d8d74de610470d573e47c30923_4119127231919054041.png?x-oss-process=image/format,webp/quality,Q_90',
//     'https://act.hoyoverse.com/puzzle/upload/puzzle/2023/05/08/fb276f1a4e33cb30c4bdc71656677e72_2979931853001167454.png?x-oss-process=image/format,webp/quality,Q_90',
//     'https://act.hoyoverse.com/puzzle/upload/puzzle/2023/05/08/d9c5a50338f4e3e5d5b1a2ab9f948820_7254203803998270631.png?x-oss-process=image/format,webp/quality,Q_90',
//     'https://act.hoyoverse.com/puzzle/upload/puzzle/2023/05/08/d8e1a79bed93ee386d2c89f7e5f6c816_8265156285009227486.png?x-oss-process=image/format,webp/quality,Q_90'
// ]

// let topics_array = [
//     "Multiple competitions will be held daily. Trailblazers on-site can sign up to participate and enjoy the excitement of beating their opponents and winning official merch! There's even exclusive gameplay that can only be experienced on the exhibition floor! Want to see what all the excitement is about? Then come challenge in our booth and see for yourself!",
//     "There will also be a special guest live performance! How much fun is live game music? Come dance with other Trailblazers and see!",
//     "Come and get a sneak peek at Honkai: Star Rail in our demo area! Tell us your thoughts and share the fun with other Trailblazers!",
//     "We've brought scenes from the game to life for Trailblazers to experience! What's your favorite scene in the game? Which character do you like the most? Come find out at our booth!",
//     "Approach our staff for details regarding on-site events. Complete simple tasks in the exhibition area to receive merch prizes such as character stickers, posters, and the HSR Passenger Booklet!"
// ]

// let currentIndex = 0; // Добавим переменную для отслеживания текущего индекса

// scroll_btn_next.addEventListener('click', function() {
//     scroll_btn_back.style.display = 'flex';

//     // Обновляем содержимое элемента .contennt-item согласно текущему индексу
//     if (currentIndex < topics_array.length - 1) {
//         currentIndex++;
//         document.querySelector('.contennt-item').innerHTML = `<p>${topics_array[currentIndex]}</p>`;
//     }

//     // Если достигли последнего элемента, скрываем кнопку .scroll-btn-next
//     if (currentIndex === topics_array.length - 1) {
//         scroll_btn_next.style.display = 'none';
//     }
// });

// scroll_btn_back.addEventListener('click', function() {
//     // Аналогично обновляем содержимое элемента .contennt-item, но в обратном порядке
//     if (currentIndex > 0) {
//         currentIndex--;
//         document.querySelector('.contennt-item').innerHTML = `<p>${topics_array[currentIndex]}</p>`;
//     }

//     // Если вернулись к первому элементу, скрываем кнопку .scroll-btn-back
//     if (currentIndex === 0) {
//         scroll_btn_back.style.display = 'none';
//     }

//     // При возвращении назад, показываем кнопку .scroll-btn-next
//     scroll_btn_next.style.display = 'flex';
// });


// let btn_news = document.querySelector('#item-news')
// function scrollDown() {
//     window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
// }

// btn_news.addEventListener('click', scrollDown)
// document.addEventListener('DOMContentLoaded', function() {
//     const normal_items = documentElement.querySelectorAll('.normal-cha-ico');
//     const hover_items = documentElement.querySelectorAll('.hover-cha-ico');

//     for (const i in normal_items) {
//         normal_items[i].addEventListener('mouseenter', function() {
//             normal_items[i].style.display = 'none';
//             hover_items[i].style.display = 'block'
//         })
//     }
// }) 

// Background animation

var PARTICLE_NUM = 500;
var PARTICLE_BASE_RADIUS = 0.5;
var FL = 500;
var DEFAULT_SPEED = 2;
var BOOST_SPEED = 300;

var canvas;
var canvasWidth, canvasHeight;
var context;
var centerX, centerY;
var mouseX, mouseY;
var speed = DEFAULT_SPEED;
var targetSpeed = DEFAULT_SPEED;
var particles = [];

window.addEventListener('load', function() {
    canvas = document.getElementById('c');
    
    var resize = function() {
        canvasWidth  = canvas.width = window.innerWidth;
        canvasHeight = canvas.height = window.innerHeight;
        centerX = canvasWidth * 0.5;
        centerY = canvasHeight * 0.5;
        context = canvas.getContext('2d');
        context.fillStyle = 'rgb(255, 255, 255)';
    };
    
    document.addEventListener('resize', resize);
    resize();
    
    mouseX = centerX;
    mouseY = centerY;
    
    for (var i = 0, p; i < PARTICLE_NUM; i++) {
        particles[i] = randomizeParticle(new Particle());
        particles[i].z -= 500 * Math.random();
    }
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    }, false);
    
    document.addEventListener('mousedown', function(e) {
        targetSpeed = BOOST_SPEED;
    }, false);
    
    document.addEventListener('mouseup', function(d) {
        targetSpeed = DEFAULT_SPEED;
    }, false);
    
    setInterval(loop, 1000 / 60);
}, false);

function loop() {
    context.save();
    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, canvasWidth, canvasHeight);
    context.restore();
    
    speed += (targetSpeed - speed) * 0.01;
    
    var p;
    var cx, cy;
    var rx, ry;
    var f, x, y, r;
    var pf, px, py, pr;
    var a, a1, a2;
    
    var halfPi = Math.PI * 0.5;
    var atan2  = Math.atan2;
    var cos    = Math.cos;
    var sin    = Math.sin;
    
    context.beginPath();
    for (var i = 0; i < PARTICLE_NUM; i++) {
        p = particles[i];
        
        p.pastZ = p.z;
        p.z -= speed;
        
        if (p.z <= 0) {
            randomizeParticle(p);
            continue;
        }
        
        cx = centerX - (mouseX - centerX) * 1.25;
        cy = centerY - (mouseY - centerY) * 1.25;
        
        rx = p.x - cx;
        ry = p.y - cy;
        
        f = FL / p.z;
        x = cx + rx * f;
        y = cy + ry * f;
        r = PARTICLE_BASE_RADIUS * f;
        
        pf = FL / p.pastZ;
        px = cx + rx * pf;
        py = cy + ry * pf;
        pr = PARTICLE_BASE_RADIUS * pf;
        
        a  = atan2(py - y, px - x);
        a1 = a + halfPi;
        a2 = a - halfPi;
        
        context.moveTo(px + pr * cos(a1), py + pr * sin(a1));
        context.arc(px, py, pr, a1, a2, true);
        context.lineTo(x + r * cos(a2), y + r * sin(a2));
        context.arc(x, y, r, a2, a1, true);
        context.closePath();
    }
    context.fill();
}

function randomizeParticle(p) {
    p.x = Math.random() * canvasWidth;
    p.y = Math.random() * canvasHeight;
    p.z = Math.random() * 1500 + 500;
    return p;
}


/**
 * Particle
 */
function Particle(x, y, z) {
    this.x = x || 0;
    this.y = y || 0;
    this.z = z || 0;
    this.pastZ = 0;
}

