const doctors = [
  [
    1,
    'Dr. Shiva Reddy',
    'Cardiologist',
    'https://randomuser.me/api/portraits/men/12.jpg',
    'Yes',
    '12 years',
    '₹800',
    5,
    'English, Telugu',
    'Specializes in treating heart-related conditions using non-invasive procedures. Trusted by 1000+ patients.',
  ],

  [
    2,
    'Dr. Anjali Mehta',
    'Dermatologist',
    'https://randomuser.me/api/portraits/women/45.jpg',
    'Yes',
    '8 years',
    '₹600',
    4,
    'English, Hindi',
    'Expert in skincare, acne, and cosmetic treatments with a gentle, evidence-based approach.',
  ],

  [
    3,
    'Dr. Ramesh Verma',
    'Orthopedic Surgeon',
    'https://randomuser.me/api/portraits/men/21.jpg',
    'No',
    '15 years',
    '₹900',
    5,
    'English',
    'Performs joint replacement and sports injury surgeries with over 1500 successful operations.',
  ],

  [
    4,
    'Dr. Priya Nair',
    'Pediatrician',
    'https://randomuser.me/api/portraits/women/32.jpg',
    'Yes',
    '10 years',
    '₹700',
    4,
    'English, Malayalam',
    'Friendly and compassionate pediatric care provider for children from newborn to teens.',
  ],

  [
    5,
    'Dr. Amir Hussain',
    'ENT Specialist',
    'https://randomuser.me/api/portraits/men/25.jpg',
    'Yes',
    '9 years',
    '₹500',
    3,
    'English, Urdu',
    'Treats ear, nose, and throat issues with advanced diagnostic tools and patient-focused care.',
  ],

  [
    6,
    'Dr. Sneha Rao',
    'Gynecologist',
    'https://randomuser.me/api/portraits/women/18.jpg',
    'No',
    '11 years',
    '₹850',
    5,
    'English, Kannada',
    'Experienced in women’s health, pregnancy care, fertility, and menstrual health management.',
  ],

  [
    7,
    'Dr. Rajiv Kapoor',
    'Neurologist',
    'https://randomuser.me/api/portraits/men/38.jpg',
    'Yes',
    '13 years',
    '₹950',
    4,
    'English, Punjabi',
    'Deals with brain, spinal cord, and nervous system disorders using latest neuroimaging techniques.',
  ],

  [
    8,
    'Dr. Meera Iyer',
    'Psychiatrist',
    'https://randomuser.me/api/portraits/women/50.jpg',
    'Yes',
    '7 years',
    '₹750',
    5,
    'English, Tamil',
    'Focused on mental wellness, treating anxiety, depression, and stress with therapy and medication.',
  ],

  [
    9,
    'Dr. Vijay Kulkarni',
    'General Physician',
    'https://randomuser.me/api/portraits/men/41.jpg',
    'Yes',
    '6 years',
    '₹400',
    4,
    'English, Marathi',
    'Provides primary care, preventive health checkups, and treatment for common illnesses.',
  ],

  [
    10,
    'Dr. Kavita Sharma',
    'Ophthalmologist',
    'https://randomuser.me/api/portraits/women/36.jpg',
    'No',
    '10 years',
    '₹650',
    4,
    'English, Hindi',
    'Expert in vision care and eye surgeries, with special focus on cataracts and LASIK procedures.',
  ],
]

const {open} = require('sqlite')
const sqlite3 = require('sqlite3')

const initalizeSqlDB = async () => {
  const db = open({
    filename: 'example.db',
    driver: sqlite3.Database,
  })
  return db
}

const tableCreate = async () => {
  const db = await initalizeSqlDB()
  const tableQuery = `
    CREATE TABLE IF NOT EXISTS employesData(
      id INTEGER,
      name VARCHAR(200),
      specialization TEXT,
      profile_image TEXT,
      availability TEXT,
      experience TEXT,
      consultation_fee TEXT,
      ratings INTEGER,
      languages_spoken TEXT
    );
  `
  await db.run(tableQuery)
  console.log('table created')
}

const alterColumn = async () => {
  const db = await initalizeSqlDB()
  const alterColumn = `
  ALTER TABLE
   employesData
  ADD
   summary TEXT;
 `
  await db.run(alterColumn)
  console.log('alter done')
}

const insertData = async () => {
  const db = await initalizeSqlDB()
  const insetQuery = `
   INSERT INTO
    employesData(id, name, specialization, profile_image, availability, experience, consultation_fee, ratings, languages_spoken, summary)
   VALUES (10, 'Dr. Kavita Sharma', 'Ophthalmologist', 'https://randomuser.me/api/portraits/women/36.jpg', 'No', '10 years', '₹650', 4, 'English, Hindi',
   'Expert in vision care and eye surgeries, with special focus on cataracts and LASIK procedures.');
  `
  await db.run(insetQuery)
  console.log('yes table inserted values')
}

insertData()
