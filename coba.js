
const fileName  = "tarif_sewa_alat";
const data      = require(`./output/${fileName}_output.json`);
const cookie    = "rsan_session=08l1jvpr7bfooff999k9s5ghj5iegp8l";
const saveURL   = "http://localhost/rsakranji/index.php/api/master/tarif_pelayanan_v2/save";
// const saveURL = "http://100.100.100.67/farnap/index.php/api/master/tarif_pelayanan_v2/save";

function createFormData(data) {
    const formData = new FormData();

    if (Array.isArray(data.unit)) {
        data.unit.forEach(unit => formData.append("unit[]", unit));
    }

    if (Array.isArray(data.tarif_detail)) {
        data.tarif_detail.forEach(detail => formData.append("tarif_detail[]", JSON.stringify(detail)));
    }

    Object.keys(data).forEach(key => {
        if (!["unit", "tarif_detail", "komponen_tarif"].includes(key)) {
            const value = data[key];
            if (typeof value === "object" && value !== null) {
                formData.append(key, JSON.stringify(value));
            } else {
                formData.append(key, value);
            }
        }
    });

    if (data.komponen_tarif) {
        formData.append("komponen_tarif", JSON.stringify(data.komponen_tarif));
    }

    return formData;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function sendDataSequentially(dataPayload) {
    for (let i = 0; i < dataPayload.length; i++) {
        const dataItem = dataPayload[i];
        const formData = createFormData(dataItem);

        try {
            const response = await fetch(saveURL, {
                method: "POST",
                body: formData,
                headers: {
                    Cookie: cookie
                }
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log(`[${i + 1}] Pengiriman data berhasil`);
            } else {
                console.error(`[${i + 1}] Gagal mengirim data`);
            }
        } catch (error) {
            console.log(error)
            console.error(`[${i + 1}] Gagal mengirim data:`, error);
            return;
        }

        // Jeda 1 detik sebelum pengiriman berikutnya
        await sleep(1000);
    }
}

sendDataSequentially(data);