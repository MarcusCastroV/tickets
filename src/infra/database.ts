import mongoose from 'mongoose'

export async function connect() {
  try {
    await mongoose.connect(
      'mongodb+srv://mvcv2016:W6LsTE0BPbL9rv9b@cluster0.qrl3pnx.mongodb.net/hero-tickets'
    )
    console.log('Database connected!')
  } catch (error) {
    console.log(' file: database.ts:5 ~ connect ~ error', error)
  }
}
