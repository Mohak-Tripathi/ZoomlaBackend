import admin from "firebase-admin";
import dotenv from "dotenv";
import serviceAccount from "./firebaseServiceAccountKey.json";

dotenv.config();


admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
});

export default admin;




//.env

// # Database Config
// DB_HOST=db
// DB_PORT=5432
// DB_USER=postgres
// DB_PASSWORD=Mohak@@1914
// DB_NAME=zoomla
// JWT_SECRET=Mohak123


// firebaseServiceAccountKey.json inside config folder
// {
//   "type": "service_account",
//   "project_id": "zoomla-2fa28",
//   "private_key_id": "93d9de61579cd97da2c57fb13759bf08103f596a",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC8DXj3uLWuHcVZ\nQrP2PKnM/sfmmXvaq7xVgn8kZ2k9QF4EuxNNxFBNqejGzh/GXxqypNSY2wT+fceH\npjScKU0WU9BdyCgpoyYg/NjaxOqXoVMkN50mMc4auiiTveyAmqlJOsmK8hwXsUgk\nvVH0Db97CshT9rjLEkKIuNO2aX/gvgmL8YEIiNGFKiVYcJ0ErLeWX3pbe4qCrazv\n/RutSaJfWnwmnCiB9XIjdwwUwN+hr54QnH17txPfrVQiH6WA2Em7lZ/RxZCWsCFJ\n+zJBZS0cbzbkqlX7ljIOmf19KCDv9p+PcA/6sPtXElUbzOgYCr5V70lmL1klVLXL\n3We75TPRAgMBAAECggEAEtyxFPvYcUn4KP9ZSKoGCBNIHrenZiQSpGsN8KtUsXma\n1JOlGIhH27peqE41frK8XU3OKzTQt+wKzu7bWQyFeGdYv4dbi+2a3fUulSbqNuJO\nEhRn9VRKjYC9oDANIEsjDr7QR1kIe1HjYBgDN90HJ0LKHC3jlC7VMJyFU8caNgL9\ncgIIq032ooeZWoTgu4bgHlKs4V6rEw8d4GYhPc2yeyHE3Hj+9FT2BIf4eYoAkmGe\nZLXjU875byzGqKnTuXcoKZHlZABGFsAcQou8vUsNoehz4cDT+y9U0LGj5Zr2YT5B\nGiS07h1HfTJr+t1hYAo15qohjOq2Pw4C3BavXCAs6QKBgQD0TwymLxqWckzdOlez\niohaZC/LbpwtW+g2GXiauqugB+BiZOHFaVuOz7P17CXTulr2lfo7jpi4zt/Gwq8M\n+Q9AdVh7A/I7cXimRbySTYKgJl+wouyoM1OZ6znUAm8cVg45EXpuaX5U8Pbe6DhR\n5YlZTwdUB2EIdpqtc52xNww35QKBgQDFDT8Z7QOugTQrvflRhTesu2AaQP19SoPE\njPOgKgSOyAQeiZhzNMzQPqyYlR/rga3EddAw128xzGOhX3+w6ucskYkHNdvRpjE6\nxZ9U7OcNNMHvq70u0tJCdbmYDVB5BFtPtrBxnUMthE/fsLa2RV7fc/zX/Ctdt+1O\nV9aVwTW1fQKBgQDS/0akbEAhOTxLQK0n4fhbYPWqU7BMuHi36I2xzJCXWNYhBJG8\n5n5tu9LoDPiqgOM43lTMhR4/VmQMDG4U3TGf8Pjm3YSidCDIMahoDstHN30jV8Le\njd2hLHe4NBX0Ohp0jTTZEQFLqQT9hT/G82AJIujoWKskHRL/xL+noyxJRQKBgHpP\ngZZvFrTvf9mS3rlqDifKWpmRM4bchLOwpdwJmLCjmGL4F0eTQ3oTHQDMt3ZwFNL4\nKdTXNC7d5g2ZgGHpPLreTwbJuHsGRFJtrjuBnN0GnUZN/Gye8WHNPvkRcpzbRm5R\nQG4VJkiPcyCuyIqUvpHGpe/Ol4BhlQvm28wylErlAoGBAIV4t0vLWZo/A/T6ksnk\npW4f3q8JNDPhexLmM8gpwbSOR/qV5s5I6WM/Z4C4tWrbYRbt8CUx3Y7lwIGeWbaG\nYErZteInZ54m6n31eBBYw4Kln2DA0oKC8jHKAQe648rTtYhADiCURSp5gvYQ8/dh\nJeybPaKx63GpGrRvQJGAijp6\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-fbsvc@zoomla-2fa28.iam.gserviceaccount.com",
//   "client_id": "105277876789591342910",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-fbsvc%40zoomla-2fa28.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
// }
