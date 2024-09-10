
// Quy tắc đổi tên: Chọn tất cả các ảnh cần đổi tên => Ấn f2 hoặc chuột phải chọn rename => Gõ "image"
// Quy tắc đặt lại số thứ tự: Đổi sang một tên khác rồi đổi lại thành "image"
const totalImages = 39; // Số lượng ảnh
const images = [];

for (let i = 1; i <= totalImages; i++) {
    images.push(`image (${i}).jpg`);
}

const gallery = document.getElementById('gallery');
const imageModal = document.getElementById('imageModal');
const modalImage = document.getElementById('modalImage');
const downloadButton = document.getElementById('downloadButton');
const backButton = document.getElementById('backButton');


// Tạo gallery
images.forEach(image => {
    const imgElement = document.createElement('img');
    imgElement.src = `./images/${image}`;
    imgElement.alt = image;
    imgElement.className = "w-full h-auto object-cover rounded-lg shadow-md cursor-pointer";
    imgElement.addEventListener('click', () => {
    modalImage.src = imgElement.src;
    downloadButton.href = imgElement.src; // Liên kết download
    downloadButton.download = image; // Tên file khi tải về
    imageModal.style.display = 'flex';
    });
    gallery.appendChild(imgElement);
});

// Nút "Quay lại" đóng modal
backButton.addEventListener('click', () => {
    imageModal.style.display = 'none';
});

// Đóng modal khi nhấn bên ngoài ảnh
imageModal.addEventListener('click', (e) => {
    if (e.target === imageModal) {
    imageModal.style.display = 'none';
    }
});



// Lắng nghe sự kiện 'contextmenu' trên toàn bộ trang
document.addEventListener('contextmenu', function(event) {
    // Ngăn chặn menu chuột phải mặc định
    event.preventDefault();
    // Hiển thị thông báo
    alert('Xin chào ! \nHành động của bạn bị vô hiệu hóa !\n- Sent by Trần Văn Quyền -');
});

// Lắng nghe sự kiện 'keydown' để kiểm tra khi người dùng nhấn phím F12
document.addEventListener('keydown', function(event) {
    // Kiểm tra nếu phím F12 (mã phím 123) được nhấn
    if (event.key === 'F12' || event.keyCode === 123) {
        event.preventDefault();
        alert('Xin Chào ! \nBạn không thể mở DevTools bằng F12 !\n- Sent by Trần Văn Quyền -');
    }
});


// Khởi tạo biến để theo dõi thời gian giữ chuột
let mouseHoldTimeout;
// Lắng nghe sự kiện 'mousedown' trên tất cả các ảnh
document.querySelectorAll('#image-grid').forEach(function(image) {
    image.addEventListener('mousedown', function(event) {
        // Khởi động bộ đếm thời gian
        mouseHoldTimeout = setTimeout(function() {
            event.preventDefault(); // Ngăn hành động mặc định
            alert('Xin chào ! \nBạn không thể giữ chuột trên ảnh này ! \n- Sent by Trần Văn Quyền -');
        }, 500); // Ngưỡng giữ chuột (500ms)
    });

    // Khi nhả chuột, xóa bộ đếm giờ
    image.addEventListener('mouseup', function() {
        clearTimeout(mouseHoldTimeout);
    });

    // Khi chuột rời khỏi ảnh, xóa bộ đếm giờ
    image.addEventListener('mouseleave', function() {
        clearTimeout(mouseHoldTimeout);
    });
});



// Back top
let backToTopBtn = document.getElementById("backToTopBtn");

// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}

// Smooth
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
