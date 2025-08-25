// HTML要素の取得
const currentTimeSpan = document.getElementById('current-time');
const clockInBtn = document.getElementById('clock-in');
const clockOutBtn = document.getElementById('clock-out');
const clockInTimeSpan = document.getElementById('clock-in-time');
const clockOutTimeSpan = document.getElementById('clock-out-time');

// 現在時刻を表示する関数
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    currentTimeSpan.textContent = `${hours}:${minutes}:${seconds}`;
}

// ページ読み込み時に時刻を更新し、1秒ごとに更新
updateTime();
setInterval(updateTime, 1000);

// ローカルストレージからデータを読み込む関数
function loadData() {
    const clockIn = localStorage.getItem('clockInTime');
    const clockOut = localStorage.getItem('clockOutTime');
    if (clockIn) {
        clockInTimeSpan.textContent = clockIn;
    }
    if (clockOut) {
        clockOutTimeSpan.textContent = clockOut;
    }
}

// ページ読み込み時にデータを読み込む
loadData();

// 出勤ボタンのクリックイベント
clockInBtn.addEventListener('click', () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    const time = `${hours}:${minutes}`;
    
    // 出勤時刻をローカルストレージに保存
    localStorage.setItem('clockInTime', time);
    
    // 画面に表示
    clockInTimeSpan.textContent = time;
    
    alert('出勤しました！');
});

// 退勤ボタンのクリックイベント
clockOutBtn.addEventListener('click', () => {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    
    const time = `${hours}:${minutes}`;
    
    // 退勤時刻をローカルストレージに保存
    localStorage.setItem('clockOutTime', time);
    
    // 画面に表示
    clockOutTimeSpan.textContent = time;
    
    alert('退勤しました！');
});
