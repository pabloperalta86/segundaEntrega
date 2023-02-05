import dotenv from 'dotenv';
dotenv.config()
const MONGO_DB = process.env.MONGO_DB_URI

export default {
  mongodb: {
    conexion: MONGO_DB
  },
  firebase : {
    "type": "service_account",
    "project_id": "cursobackend-9c8b7",
    "private_key_id": "911feaa13a6dd59133e3e980dd6e2795a75aaab9",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDyzMTSLZ/1nC0A\n6VlmJq/9RydFN9wtyAZmfIWdI8rne+8YpMW0XgeGgeiAfH55RhKfKdLpA7lna6qD\nGb1qY8sGoVIIeByPWgWdC4x+E/v3Lzt1zlX4WkAFuZ3etwPDYsrd96MaaKUNGtaC\nfBVa4htu/6J/mLUgx8lwYgFe9HC2TjZ5K8XWlNZjVezRGkd1fmO9ao/s6AQYa5oS\ncZVDCKdy/v/CwG1walAGBsKlXozKRggNayQCYXm4kEYxBRqdl9o9WC18nKQdYTuo\nk8lFWe281gbqay0ovqjXIGuhcibMP69oH4ix9gfHhURqDMxnuMv/K9h1TIZizKli\naEP+BgJnAgMBAAECggEACwhnAS31kNGR8fKoj02+vYGYNTr+lE38jHeoEqXnuHEX\nQkVqfnGvYdtRV1VQ4e3fNsBNxyzWJe7shpyK0OTL+vclpSDgG1t52dMGhUwfLPJG\nf2nq2igvtJLkq5QhZaV9lmyEStTqexf3G2LMDZ8so/SVy7qCsISjkKnDai8tV/tL\nMMnwXJHpNiO3o/TBWYG40qb22Jm/Ql/3fW0znkjDAihi+iHrfnd1GzB6hyesCQfq\nrEInD/OFVln+bvlLkSC4WG5a0th0p8RRrodC6/eU1wqp8ujK5/ZvUKeQReFZp9Pr\nnZXYYK6Y1utd6k8+ZEUNJNj/GKH70Br5+afv2FL1EQKBgQD+ZagPmcVpWfB1U620\nrIWHPNA1bHVrIpTjYE9Qlt72+lcxx81IU9YepX/yi6bhXDaOrQs1l9EiAQCDoaAI\nbeaOuiiimVANXUL+BSgH/GDdfaU58YbjWhh9nSKE6Lv8JstVfMK4YFrQ58/jWwZK\nkuNcBns0OxGte8x08jqL3q746wKBgQD0VGfuwgfWQIFWggg6OEn7lszFemESrKoG\nLbC00DwleZEvPyC84+7V2yWGuAujzgAGr4/1HM1wJEb3mj/jYrr321MGDoPSC9q4\nfmAceRHAaz8oTWqUW9uzTKgHm4Qs87fLbxr3/RsrZXNJiE58BxWd4n/Rpe+BNjEG\neqx5AKr9dQKBgQCZ7B4cmli0nqN8Cc5PRBditSvxNxdwZDMbxDkZNL/hRaUeTJrr\niTZDwrVApripIGcuOotOuPXjkiGig1dV4lEeyIovn32tKGGRWsNW2aAuQ4iGH5oS\n039/+WRacIrVTQ+4QM18S2iHf8rr8DZFRszj8FP5TUgr5HzXwXwlBu5tUwKBgFiZ\nRvsAZ0EdMQmCq6MZCFLwMx8lKpBQBnOpG9vlavoX5DrixGdarB/mkOwSTz4+FCpY\nfXZf1Gtm7EkbKTG2eqAoaynWF50SaWTfhtCsYnCJM2TU9eIIkVmqYYAot7xpQGvH\nxVrJ8JFC/5RZlkRJeWBAYyNN7dTIJuz3jRVv1ZGFAoGAGUzLV22SEgKzYoUC15JZ\nmLyuMSOj0gzBD6RIVnBuuc0U4xtt+y7couYrEb7zQOJsedNUap+RqP58eHUpa/cW\nzM3iqn2A5YFxStPFjJjTzUR3ml/FkQTLvEfk2lclk0TSn4koZdrKT/YzpJxQYFQ7\n/mkgTbxk+eRpndEAgW7qpU0=\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-4un30@cursobackend-9c8b7.iam.gserviceaccount.com",
    "client_id": "101379433723072387469",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4un30%40cursobackend-9c8b7.iam.gserviceaccount.com"
  }
}