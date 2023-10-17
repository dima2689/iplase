import { sendEmail } from '../../utils/mailsender';

// eslint-disable-next-line consistent-return
export default function handler(req, res) {
    if (req.body) {
        return sendEmail(
            'Новый заказ на сайте iplace163.ru',
            req.body,
            process.env.MAIL_ORDERS_RECIEVER
        );
    }
    res.status(200).json({
        body: { status: 'ok' },
    });
}
