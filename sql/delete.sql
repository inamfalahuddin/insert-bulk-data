-- Menghapus dari m_tarif_pelayanan_komponen_detail berdasarkan tarif_pelayanan_detail_id
DELETE FROM m_tarif_pelayanan_komponen_detail
WHERE tarif_pelayanan_detail_id IN (
    SELECT id FROM m_tarif_pelayanan_detail
    WHERE tarif_pelayanan_id IN (
        SELECT id FROM m_tarif_pelayanan
        WHERE DATE(created_at) >= '2025-03-12'
    )
);

-- Menghapus dari m_tarif_pelayanan_detail berdasarkan tarif_pelayanan_id
DELETE FROM m_tarif_pelayanan_detail
WHERE tarif_pelayanan_id IN (
    SELECT id FROM m_tarif_pelayanan
    WHERE DATE(created_at) >= '2025-03-12'
);

DELETE FROM t_tindakan
WHERE tarif_pelayanan_id IN (
    SELECT id FROM m_tarif_pelayanan
    WHERE DATE(created_at) >= '2025-03-12'
);

SELECT * FROM t_pelayanan_tindakan WHERE DATE(created_at) >= '2025-03-12';

DELETE FROM m_tarif_pelayanan WHERE kode >= 'TD05144';