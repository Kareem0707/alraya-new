// Alraya Database Integration (Firebase)
// ============================================
// برجاء استبدال القيم أدناه بالقيم الخاصة بك من منصة Google Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCKHTS94aJ5THD3wvGLDfEO_fWA5K9eYyM",
    authDomain: "alraya-lighting.firebaseapp.com",
    projectId: "alraya-lighting",
    storageBucket: "alraya-lighting.firebasestorage.app",
    messagingSenderId: "1035184276441",
    appId: "1:1035184276441:web:e22288aa7162928d7dcfc8",
    measurementId: "G-N89RDT8NXJ"
};

let db = null;
let useFirebase = false;

// التحقق مما إذا كان قد تم إضافة بيانات الفايربيز
if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
    // تهيئة Firebase
    firebase.initializeApp(firebaseConfig);
    db = firebase.firestore();
    useFirebase = true;
    console.log("Firebase is Active!");
} else {
    console.log("Using Local Storage Flow (Waiting for Firebase Config)");
}

// دالة لحفظ الطلبات
async function saveOrderToDB(orderData) {
    // 1. الحفظ في الفايربيز إذا كان مفعلاً
    if (useFirebase) {
        try {
            await db.collection("alraya_orders").doc(orderData.id).set(orderData);
        } catch (e) {
            console.error("Firebase saving error: ", e);
        }
    }

    // 2. الحفظ المحلي كنسخة احتياطية ولتتبع العميل على جهازه
    let allOrders = JSON.parse(localStorage.getItem('alraya_orders')) || [];
    // منع التكرار (في حال حفظنا نفس الاوردر)
    const exists = allOrders.find(o => o.id === orderData.id);
    if (!exists) {
        allOrders.unshift(orderData);
        localStorage.setItem('alraya_orders', JSON.stringify(allOrders));
    }
    localStorage.setItem('alraya_latest_order', JSON.stringify(orderData));
}

// دالة لجلب الطلبات للداشبورد (تستمع للتغييرات اللحظية)
function subscribeToOrders(callback) {
    if (useFirebase) {
        // الاتصال اللحظي Real-time
        db.collection("alraya_orders").orderBy("date", "desc")
            .onSnapshot((querySnapshot) => {
                let orders = [];
                querySnapshot.forEach((doc) => {
                    orders.push(doc.data());
                });

                // تحديث اللوكال ستورج عند الأدمن ليتطابق مع الداتابيز
                localStorage.setItem('alraya_orders', JSON.stringify(orders));
                callback(orders);
            }, (error) => {
                console.error("Error fetching orders:", error);
            });
    } else {
        // العمل بالطريقة القديمة إذا لم يتم ربط الداتابيز
        let orders = JSON.parse(localStorage.getItem('alraya_orders')) || [];
        callback(orders);
    }
}

// دالة لتحديث حالة الطلب وإرسال رسالة للعميل
async function updateOrderStatusInDB(orderId, newStatus, newEta, adminMessage = "") {
    if (useFirebase) {
        try {
            await db.collection("alraya_orders").doc(orderId).update({
                status: newStatus,
                eta: newEta,
                adminMessage: adminMessage
            });
        } catch (e) {
            console.error("Error updating status in Firebase: ", e);
        }
    } else {
        // تحديث محلي فقط
        let allOrders = JSON.parse(localStorage.getItem('alraya_orders')) || [];
        let idx = allOrders.findIndex(o => o.id === orderId);
        if (idx > -1) {
            allOrders[idx].status = newStatus;
            allOrders[idx].eta = newEta;
            allOrders[idx].adminMessage = adminMessage;
            localStorage.setItem('alraya_orders', JSON.stringify(allOrders));
        }
    }
}

// دالة لجلب تفاصيل طلب واحد للعميل (لسحب آخر حالة من الداتابيز)
async function fetchOrderByIdFromDB(orderId) {
    if (useFirebase) {
        try {
            const doc = await db.collection("alraya_orders").doc(orderId).get();
            if (doc.exists) {
                return doc.data();
            }
        } catch (e) {
            console.error("Error fetching order from Firebase:", e);
        }
    }
    return null;
}

// دالة لتحديث المنتج (سعر، اسم، تفاصيل)
async function updateProductInDB(productOverride) {
    if (useFirebase) {
        try {
            await db.collection("alraya_products").doc(productOverride.id.toString()).set(productOverride, { merge: true });
        } catch (e) {
            console.error("Firebase saving error: ", e);
        }
    }

    // حفظ محلي للأدمن
    let overrides = JSON.parse(localStorage.getItem('alraya_product_overrides')) || {};
    overrides[productOverride.id] = productOverride;
    localStorage.setItem('alraya_product_overrides', JSON.stringify(overrides));
}

// دالة لجلب تعديلات المنتجات (تستمع للتغييرات اللحظية)
function subscribeToProductOverrides(callback) {
    if (useFirebase) {
        db.collection("alraya_products").onSnapshot((querySnapshot) => {
            let overrides = {};
            querySnapshot.forEach((doc) => {
                overrides[doc.id] = doc.data();
            });
            localStorage.setItem('alraya_product_overrides', JSON.stringify(overrides));
            callback(overrides);
        }, (error) => {
            console.error("Error fetching products:", error);
        });
    } else {
        let overrides = JSON.parse(localStorage.getItem('alraya_product_overrides')) || {};
        callback(overrides);
    }
}

// دالة لحفظ الإعدادات
async function saveSettingsToDB(settings) {
    if (useFirebase) {
        try {
            await db.collection("alraya_store_config").doc("main_settings").set(settings);
        } catch (e) {
            console.error("Firebase saving error: ", e);
        }
    }
    localStorage.setItem('alraya_settings', JSON.stringify(settings));
}

// دالة لجلب الإعدادات لحظياً
function subscribeToSettings(callback) {
    if (useFirebase) {
        db.collection("alraya_store_config").doc("main_settings").onSnapshot((doc) => {
            if (doc.exists) {
                let settings = doc.data();
                localStorage.setItem('alraya_settings', JSON.stringify(settings));
                callback(settings);
            } else {
                callback(null);
            }
        }, (error) => {
            console.error("Error fetching settings:", error);
        });
    } else {
        let settings = JSON.parse(localStorage.getItem('alraya_settings')) || null;
        callback(settings);
    }
}

// ================= Analytics & Presence =================

function initPresenceTracker() {
    if (!useFirebase) return;
    if (localStorage.getItem('isAdmin') === 'true') return; // Don't track admin

    let sessionId = sessionStorage.getItem('alraya_session_id');
    if (!sessionId) {
        sessionId = 'session_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('alraya_session_id', sessionId);

        // Log a view on first visit of the session
        const statsRef = db.collection("alraya_store_config").doc("analytics");
        statsRef.set({ views: firebase.firestore.FieldValue.increment(1) }, { merge: true }).catch(() => { });
    }

    const presenceRef = db.collection("alraya_live_users").doc(sessionId);

    const updateActivity = () => {
        presenceRef.set({
            lastActive: firebase.firestore.FieldValue.serverTimestamp()
        }).catch(() => { });
    };

    updateActivity();
    setInterval(updateActivity, 60000); // Heartbeat every 1 minute
}

function logSiteEvent(eventName) {
    if (!useFirebase) return;
    if (localStorage.getItem('isAdmin') === 'true') return; // Don't track admin events
    const statsRef = db.collection("alraya_store_config").doc("analytics");
    statsRef.set({
        events: firebase.firestore.FieldValue.increment(1)
    }, { merge: true }).catch(() => { });
}

function subscribeToAnalytics(callback) {
    if (!useFirebase) return;
    db.collection("alraya_store_config").doc("analytics").onSnapshot((doc) => {
        if (doc.exists) {
            callback(doc.data());
        }
    });
}

function subscribeToLiveUsers(callback) {
    if (!useFirebase) return;

    // We fetch users updated in the last 24h, but we filter out those older than 3 minutes locally
    // to avoid complex index queries on client side.
    db.collection("alraya_live_users").orderBy("lastActive", "desc").limit(50).onSnapshot((snapshot) => {
        let liveCount = 0;
        const now = new Date();
        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.lastActive) {
                const lastActiveDate = data.lastActive.toDate();
                if ((now - lastActiveDate) < 3 * 60000) { // 3 minutes timeout
                    liveCount++;
                }
            }
        });
        callback(liveCount);
    });
}

// ================= Reviews System =================

// دالة لجلب التقييمات لحظياً
function subscribeToReviews(callback) {
    if (useFirebase) {
        db.collection("alraya_reviews").orderBy("date", "desc")
            .onSnapshot((querySnapshot) => {
                let reviews = [];
                querySnapshot.forEach((doc) => {
                    reviews.push({ id: doc.id, ...doc.data() });
                });
                localStorage.setItem('alraya_reviews', JSON.stringify(reviews));
                callback(reviews);
            }, (error) => {
                console.error("Error fetching reviews:", error);
            });
    } else {
        let reviews = JSON.parse(localStorage.getItem('alraya_reviews')) || [];
        callback(reviews.sort((a, b) => new Date(b.date) - new Date(a.date)));
    }
}

// دالة لإضافة تقييم جديد
async function addReviewToDB(review) {
    if (useFirebase) {
        try {
            const docRef = await db.collection("alraya_reviews").add({
                name: review.name,
                text: review.text,
                rating: parseInt(review.rating),
                date: new Date().toISOString()
            });
            return docRef.id;
        } catch (e) {
            console.error("Firebase saving error: ", e);
            return null;
        }
    } else {
        let reviews = JSON.parse(localStorage.getItem('alraya_reviews')) || [];
        const newReview = { id: 'rev_' + Date.now(), ...review, date: new Date().toISOString() };
        reviews.push(newReview);
        localStorage.setItem('alraya_reviews', JSON.stringify(reviews));
        return newReview.id;
    }
}

// دالة لحذف تقييم (للأدمن)
async function deleteReviewFromDB(id) {
    if (useFirebase) {
        try {
            await db.collection("alraya_reviews").doc(id).delete();
        } catch (e) {
            console.error("Error deleting review from Firebase: ", e);
        }
    } else {
        let reviews = JSON.parse(localStorage.getItem('alraya_reviews')) || [];
        reviews = reviews.filter(r => r.id !== id);
        localStorage.setItem('alraya_reviews', JSON.stringify(reviews));
    }
}
