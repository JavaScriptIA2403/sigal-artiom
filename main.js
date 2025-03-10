// Шаг 1. Создание массива транзакций
const transactions = [
    {
        transaction_id: 1,
        transaction_date: "2024-02-20",
        transaction_amount: 150,
        transaction_type: "debit",
        transaction_description: "Оплата в магазине",
        merchant_name: "Supermarket",
        card_type: "debit"
    },
    {
        transaction_id: 2,
        transaction_date: "2024-02-21",
        transaction_amount: 300,
        transaction_type: "credit",
        transaction_description: "Возврат средств",
        merchant_name: "Online Store",
        card_type: "credit"
    },
    {
        transaction_id: 3,
        transaction_date: "2024-02-22",
        transaction_amount: 500,
        transaction_type: "debit",
        transaction_description: "Оплата услуг",
        merchant_name: "Utility Company",
        card_type: "debit"
    }
];

/**
 * Возвращает массив уникальных типов транзакций
 * @param {Array} transactions - массив транзакций
 * @returns {Array} - массив уникальных типов транзакций
 */
function getUniqueTransactionTypes(transactions) {
    return [...new Set(transactions.map(t => t.transaction_type))];
}

/**
 * Вычисляет сумму всех транзакций
 * @param {Array} transactions - массив транзакций
 * @returns {number} - общая сумма транзакций
 */
function calculateTotalAmount(transactions) {
    return transactions.reduce((sum, t) => sum + t.transaction_amount, 0);
}

/**
 * Возвращает транзакции указанного типа (debit или credit)
 * @param {Array} transactions - массив транзакций
 * @param {string} type - тип транзакции
 * @returns {Array} - отфильтрованный массив транзакций
 */
function getTransactionByType(transactions, type) {
    return transactions.filter(t => t.transaction_type === type);
}

/**
 * Возвращает массив транзакций в указанном диапазоне дат
 * @param {Array} transactions - массив транзакций
 * @param {string} startDate - начальная дата (в формате YYYY-MM-DD)
 * @param {string} endDate - конечная дата (в формате YYYY-MM-DD)
 * @returns {Array} - массив транзакций в указанном диапазоне
 */
function getTransactionsInDateRange(transactions, startDate, endDate) {
    return transactions.filter(t => t.transaction_date >= startDate && t.transaction_date <= endDate);
}

/**
 * Возвращает массив транзакций с указанным названием магазина
 * @param {Array} transactions - массив транзакций
 * @param {string} merchantName - название магазина
 * @returns {Array} - массив транзакций с указанным магазином
 */
function getTransactionsByMerchant(transactions, merchantName) {
    return transactions.filter(t => t.merchant_name === merchantName);
}

/**
 * Вычисляет среднее значение транзакций
 * @param {Array} transactions - массив транзакций
 * @returns {number} - средняя сумма транзакций
 */
function calculateAverageTransactionAmount(transactions) {
    return transactions.length ? calculateTotalAmount(transactions) / transactions.length : 0;
}

// Тестирование функций
console.log("Уникальные типы транзакций:", getUniqueTransactionTypes(transactions));
console.log("Общая сумма транзакций:", calculateTotalAmount(transactions));
console.log("Дебетовые транзакции:", getTransactionByType(transactions, "debit"));
console.log("Транзакции в диапазоне дат:", getTransactionsInDateRange(transactions, "2024-02-20", "2024-02-22"));
console.log("Транзакции по магазину 'Supermarket':", getTransactionsByMerchant(transactions, "Supermarket"));
console.log("Средняя сумма транзакций:", calculateAverageTransactionAmount(transactions));
