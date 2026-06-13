export const nums = [
  'Zero',
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
  'Eleven',
  'Twelve',
  'Thirteen',
  'Fourteen',
  'Fifteen',
]

export const lessons = {
  'Sweep Picking': [
    'Sweeping Primer',
    'Inside / Outside Picking',
    'Changing Directions',
    'Building Speed',
  ],
  'Picking Patterns': {
    'Alternate Picking': [
      'Single & Adjacent Strings',
      'String Skipping',
      'Skip 2 Strings',
      'Skip 3 strings',
      'Skip 4 strings',
      'Random Patterns',
    ],
    'Economy Picking': [
      'Adjacent Strings',
      'Skip 1 & 2 strings',
      'Skip 3 & 4 strings',
      'Random Patterns',
    ],
    'Cross Picking': [
      'Banjo Rolls',
      'Inside / Outside Picking',
      'Miscellaneous Exercises',
      'Random Patterns',
    ],
  },
}

export const exercises = {
  'Sweep Picking': {
    title: 'Part 1: Sweep Picking',
    lessons: [
      {
        lesson: 1,
        exercises: [
          [
            'Exercise 1 - Sweep up and down all six strings, one note per beat.',
            '654321123456',
            'd-----u-----',
            '6', // notes per measure
            '6/4', // time signature
            '1', // notes per beat
          ],
          [
            'Exercise 2 - Sweep up and down all five strings, two notes per beat. Skip the last half beat.',
            '54321e12345e',
            'd-----u-----',
            '6', // notes per measure
            '3/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 3 - Sweep up and down five strings, four notes per beat. Count: 1 - e - & - a - 2 (pause), 3 - e - & - a - 4 (pause)',
            '54321-E-12345-E-',
            'd-------u-------',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
        ],
      },
      {
        lesson: 2,
        exercises: [
          [
            'Exercise 1 - Sweep up and down all five strings, one note per beat.',
            '5432112345',
            'd----u----',
            '5', // notes per measure
            '5/4', // time signature
            '1', // notes per beat
          ],
          [
            'Exercise 2 - Use inside picking to change directions.',
            '54321234',
            '-d---u--',
            '4', // notes per measure
            '4/4', // time signature
            '1', // notes per beat
          ],
          [
            'Exercise 3 - Use outside picking to change directions.',
            '54321234',
            'd---u---',
            '4', // notes per measure
            '4/4', // time signature
            '1', // notes per beat
          ],
          [
            "Exercise 4 - Play two notes per beat. Skip the '&' of the 3rd beat.",
            '54321e12345e',
            'd-----u-----',
            '6', // notes per measure
            '3/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 5 - Play two notes per beat, use inside picking to change directions.',
            '54321234',
            '-d---u--',
            '8', // notes per measure
            '4/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 6 - Play two notes per beat, use outside picking to change directions.',
            '54321234',
            'd---u---',
            '8', // notes per measure
            '4/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 7 - Play four notes per beat. Count: 1 - e - & - a - 2 - (pause) - 3 - e - & - a - 4',
            '54321-Q-12345-Q-',
            'd-------u-------',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 8 - Play four notes per beat, use inside picking to change directions.',
            '5432123454321234',
            '-d---u--',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 9 - Play four notes per beat, use outside picking to change directions.',
            '5432123454321234',
            'd---u---',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 10 - Alternate freely between inside and outside picking; get a feeling for both.',
            '5432123454321234',
            '---------',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
        ],
      },
      {
        lesson: 3,
        exercises: [
          [
            'Exercise 1 - Stay relaxed while sweeping up all five strings, then down all five strings.',
            '54321 12345',
            'd----u----',
            '5', // notes per measure
            '5/4', // time signature
            '1', // notes per beat
          ],
          [
            'Exercise 2 - Play two notes per beat and skip the last half beat.',
            '54321e 12345e',
            'd----- u-----',
            '6', // notes per measure
            '3/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 3 - One sweep at a time, four notes per beat. Count: 1 - e - & - a - 2 (pause) 3 - e - & - a - 4.',
            '54321-Q-12345-Q-',
            'd-------u-------',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 4 - Two notes per beat, cross-pick the last note.',
            '54321e 12345e',
            'd---u- u---d-',
            '6', // notes per measure
            '3/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 5 - Four notes per beat, cross-pick the last note.',
            '54321---12345---',
            'd---u---u---d---',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 6 - Two notes per beat, use inside picking to pick one extra note.',
            '543212--123454--',
            'd----u--u----d--',
            '8', // notes per measure
            '4/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 7 - Four notes per beat, use inside picking to pick one extra note.',
            '543212--123454--',
            'd----u--u----d--',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 8 - Two notes per beat. Use outside picking, then pick one extra note.',
            '543212--123454--',
            'd---u---u---d---',
            '8', // notes per measure
            '4/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 9 - Four notes per beat. Use outside picking, then pick one extra note.',
            '543212--123454--',
            'd---u---u---d---',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 10 - Alternate freely between inside and outside picking, remember to avoid any tension.',
            '543212--123454--',
            'd---u---u---d---',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
        ],
      },
      {
        lesson: 4,
        exercises: [
          [
            'Exercise 1 - Sweep up and down the first four strings, one note per beat.',
            '43211234',
            'd---u---',
            '4', // notes per measure
            '4/4', // time signature
            '1', // notes per beat
          ],
          [
            'Exercise 2 - Sweep up and down the first four strings, two notes per beat.',
            '43211234',
            'd---u---',
            '8', // notes per measure
            '4/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 3 - Sweep up and down the first four strings, four notes per beat.',
            '4321123443211234',
            'd---u---',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 4 - Sweep from the 5th string to the 2nd and back. Play four notes per beat.',
            '5432234554322345',
            'd---u---',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 5 - Sweep from the 6th string to the 3rd and back. Play four notes per beat.',
            '6543345665433456',
            'd---u---',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 6 - Use inside picking to sweep five strings up & down. Play two notes per beat.',
            '5432123454321234',
            '-d---u--',
            '8', // notes per measure
            '4/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 7 - Use inside picking like before, but play four notes per beat.',
            '5432123454321234',
            '-d---u--',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 8 - Use outside picking to sweep five strings up & down. Play two notes per beat.',
            '5432123454321234',
            'd---u---',
            '8', // notes per measure
            '4/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 9 - Use outside picking like before, but play four notes per beat.',
            '5432123454321234',
            'd---u---',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            // 'Exercise 10 - Practice any of these three patterns one note per beat, then play two and four notes per beat. Use both inside and outside picking.',
            'Exercise 10 - Random or picking a pattern and playing one, two then four notes per beat are all being planned',
            // '6543123465431234', 
            // '4321345643213456',
            '6532124565321245',
            '--------',  //  '--------   --------',
            '16', // notes per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
        ],
      },
    ],
  },
  'Picking Patterns': {
    'Alternate Picking': {
      title: 'Part 1: Alternate Picking',
      lessons: [
        {
          lesson: 1,
          exercises: [
            [
              'Exercise 1 - Pick just the 6th string',
              '6666',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 2 - Pick just the 5th string',
              '5555',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 3 - Pick just the 4th string',
              '4444',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 4 - Pick just the 3rd string',
              '3333',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 5 - Pick just the 2nd string',
              '2222',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 6 - Pick just the 1st string',
              '1111',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 7 - Play four notes per string',
              '6666 5555 4444 3333 2222 1111 2222 3333 4444 5555',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 8 - Four note pattern; inside picking - start with the low string',
              '6656 5545 4434 3323 2212 3323 4434 5545',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 9 - Four note pattern; outside picking - start with the low string',
              '6566 5455 4344 3233 2122 3233 4344 5455',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 10 - Four note pattern; inside picking - start with the high string',
              '5655 4544 3433 2322 1211 2322 3433 4544',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 11 - Four note pattern; outside picking - start with the high string',
              '5565 4454 3343 2232 1121 2232 3343 4454',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 12 - Arpeggiate all six strings with alternate picking',
              '6543212345',
              'dudu',
              '5', // notes per measure
              '5/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 13 - Pick three notes per string, one note per beat',
              '66655544 43332221 11222333 444555',
              'dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 14 - Pick three notes per string, three notes per beat.',
              '666555444333 222111222333 444555 666555444333 222111222333 444555',
              'dudududu',
              '12', // notes per measure
              '12/8', // time signature
              '3', // notes per beat
            ],
            [
              'Exercise 15 - Rhythm exercise - play two notes per beat, count the beats.',
              '666555444333 222111222333 444555 666555444333 222111222333 444555',
              'du',
              '8', // notes per measure
              '4/4', // time signature
              '2', // notes per beat
            ],
          ],
        },
        {
          lesson: 2,
          exercises: [
            [
              'Exercise 1 - Play four notes per string, skip one string',
              '6666 4444 5555 3333 4444 2222 3333 1111 3333 2222 4444 3333 5555 4444',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 2 - Play two notes per string, skip one string',
              '6644 5533 4422 331133 2244 3355',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 3 - Start on the 5th string and pick each string once. This uses inside picking to skip one string',
              '4645342313243546',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 4 - Start on the 6th string and pick each string once. This uses outside picking to skip one string',
              '6453423132435464',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 5 - A four note pattern with inside picking. Skip one string Starting with the low string.',
              '6646 5535 4424 3313 4424 5535',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 6 - A four note pattern with outside picking. Skip one string Starting with the low string.',
              '6466 5355 4244 3133 4244 5355',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 7 - A four note pattern with inside picking. Skip one string Starting with the high string.',
              '4644 3533 2422 1311 2422 3533',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 8 - A four note pattern with outside picking. Skip one string Starting with the high string.',
              '4464 3353 2242 1131 2242 3353',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 9 - Pick strings 6, 4 and 2, then pick strings 1, 3 and 5',
              '642135',
              'dudu',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 10 - Pick strings 5, 3 and 1, then pick strings 2, 4 and 6',
              '531246',
              'dudu',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
        {
          lesson: 3,
          exercises: [
            [
              'Exercise 1 - Play four adjacent strings, then play the first and last twice. Reverse the order of the strings when descending.',
              '65436363 54325252 43214141 12341414 23452525 34563636',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 2 - Play four notes per string. Skip two strings',
              '66663333 55552222 444411114444 22225555 3333 66663333 55552222 444411114444 22225555 3333',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 3 - Play two notes per string. Skip two strings',
              '66335522 441144 225533',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 4 - Pick each string only once starting on the 3rd string. Use inside picking to skip two strings.',
              '3635241425 3635241425',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 5 - Pick each string only once starting on the 6th string. Use outside picking to skip two strings.',
              '6352414253 6352414253',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 6 - A four note pattern with inside picking. Skip two strings Starting with the low string.',
              '6636 5525 4414 5525',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 7 - A four note pattern with outside picking. Skip two strings Starting with the low string.',
              '6366 5255 4144 5255',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 8 - A four note pattern with inside picking. Skip two strings starting with the high string.',
              '3633 2522 1411 2522',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 9 - A four note pattern with outside picking. Skip two strings starting with the high string.',
              '3363 2252 1141 2252',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 10 -  First skip one string twice, then play the first and last notes twice. Reverse the order of the strings when descending.',
              '64536363 53425252 42314141 13241414 24352525 35463636',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
        {
          lesson: 4,
          exercises: [
            [
              'Exercise 1 - Play four notes per string. Skip three strings.',
              '6666 2222 5555 1111 5555 2222',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 2 - Play two notes per string. Skip three strings.',
              '6622 5511 5522',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 3 - Pick each string only once starting on the 2nd string. Use inside picking to skip three strings.',
              '262515',
              'dudu',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 4 - Pick each string only once starting on the 6th string. Use outside picking to skip three strings.',
              '625152',
              'dudu',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 5 - A four note pattern with inside picking. Skip three strings starting with the low string',
              '66265515',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 6 - A four note pattern with outside picking. Skip three strings starting with the low string',
              '62665155',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 7 - A four note pattern with inside picking. Skip three strings starting with the high string',
              '26221511',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 8 - A four note pattern with outside picking. Skip three strings starting with the high string',
              '22621151',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 9 - Skip three strings. Start with the lower string when ascending, and the higher string when descending.',
              '6262 5151 1515 2626',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 10 - This uses a finger-picking type pattern; one base note followed by three notes on the 1st and 2nd strings.',
              '62125121',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
        {
          lesson: 5,
          exercises: [
            [
              'Exercise 1 - Play four notes per string. Skip four strings.',
              '66661111',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 2 - Play two notes per string. Skip four strings.',
              '6611',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 3 - Pick each string only once starting on the 1st string. Use inside picking to skip four strings.',
              '16',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 4 - Pick each string only once starting on the 6th string. Use outside picking to skip four strings.',
              '61',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 5 - A four note pattern with inside picking. Skip four strings starting with the low string.',
              '6616',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 6 - A four note pattern with outside picking. Skip four strings starting with the low string.',
              '6166',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 7 - A four note pattern with inside picking. Skip four strings starting with the high string.',
              '1611',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 8 - A four note pattern with outside picking. Skip four strings starting with the high string.',
              '1161',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 9 - Play two notes on the 6th string and one on the 1st string.',
              '661',
              'dudu',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 10 - Play two notes on the 1st string and one on the 6th string.',
              '116',
              'dudu',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
        {
          lesson: 6,
          exercises: [
            [
              'Pattern 1 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '65465456 54354345 43243234 32132123 43243234 54354345',
              'dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 1 (part two) - Skip the 3rd beat and continue with an upstroke on the next '&'.",
              '6546q456 5435q345 4324q234 3213q123 4324q234 5435q345',
              'dudu-udu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 2 - Play 4 ascending notes, then play the last two note3s again before coming back to the first note.',
              '65434356 54323245 43212134 54323245',
              'dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 2 (part two) - Skip the '&' of the 2nd beat and continue with a downstroke on the 3rd beat.",
              '654q4356 543q3245 432q2134 543q3245',
              'dud-dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 3 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '65463453 54352342 43241231 54352342',
              'dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 3 (part two) - Skip the 4th beat and continue with an upstroke on the next '&'.",
              '654634q4 543523q2 432412q1 543523q2',
              'dududu-u',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 4 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '63543645 52432534 41321423 52432534',
              'dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 4 (part two) - Skip the '&' of the 3rd beat and continue with a downstroke on the 4th beat.",
              '63543q45 52432q34 41321q23 52432q34',
              'dudud-du',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 5 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '66445345 55334234 44223123 55334234',
              'dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 5 (part two) - Skip the 2nd beat and continue with an upstroke on the next '&'.",
              '66q45345 55q34234 44q23123 55q34234',
              'du-ududu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
      ],
    },
    'Economy Picking': {
      title: 'Part 2: Economy Picking',
      lessons: [
        {
          lesson: 1,
          exercises: [
            [
              'Exercise 1 - Arpeggiate all 6 strings. Use inside picking to change directions.',
              '6543212345',
              '-d----u---',
              '5', // notes per measure
              '5/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 2 - Four note pattern - start with two notes on the low string. Use sweeps when descending.',
              '6656 5545 4434 3323 2212 3323 4434 5545',
              'ud-u dudu dudu dudu dudu -d-u -d-u -d-u',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 3 - Four note pattern - start with one note on the low string. Use sweeps when ascending.',
              '6566 5455 4344 3233 2122 3233 4344 5455',
              'd-ud --ud --ud --ud --ud udud udud udud',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 4 - Four note pattern - start with one note on the high string. Use sweeps when descending.',
              '5655 4544 3433 2322 1211 2322 3433',
              'dudu dudu -dud udud u-du du-- du--',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 5 - Four note pattern - start with two notes on the high string. Use sweeps when ascending.',
              '5565 4454 3343 2232 1121 2232 3343 4454',
              'udud -u-d -u-d -u-d -u-d udud udud udud',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 6 - Pick three notes per string, one note per beat',
              '6665 5544 4333 2221 1122 2333 4445 55 6665 5544 4333 2221 1122 2333 4445 55',
              '-dud ud-u d-ud -ud- udud u-du -du- du',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 7 - Pick three notes per string, three notes per beat',
              '666555 444333 222111 222333 444555 666555 444333 222111 222333 444555',
              '-dud ud-u d-ud -ud- udud u-du -du- du',
              '12', // notes per measure
              '12/8', // time signature
              '3', // notes per beat
            ],
            [
              "Exercise 8 - Play two notes per beat. For an extra challenge, try counting 1 & 2 & 3 & 4 &. It's different without alternate picking.",
              '666555 444333 222 111 222333 444555 666555 444333 222 111 222333 444555',
              '-dud ud-u d-ud -ud- udud u-du -du- du',
              '8', // notes per measure
              '8/4', // time signature
              '2', // notes per beat
            ],
            [
              'Exercise 9 - Ascend and descend with two notes per string. The only sweeps are when changing directions.',
              '6655 4433 2211 2233 4455 6655 4433 2211 2233 4455',
              'ud-u dudu dudu -dud udud',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 10 - This lesson is not done - repeat last lesson.',
              '6655 4433 2211 2233 4455 6655 4433 2211 2233 4455',
              'ud-u dudu dudu -dud udud',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
        {
          lesson: 2,
          exercises: [
            [
              'Exercise 1 - Four note pattern - start with two notes on the low string. Skip one string and use sweeps when descending.',
              '6646 5535 4424 3313 4424 5535',
              '-d-u dudu dudu dudu -d-u -d-u',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 2 - Four note pattern - start with one note on the low string. Skip one string and use sweeps when ascending.',
              '6466 5355 4244 3133 4244 5355',
              'udud --ud --ud --ud udud udud',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 3 - Four note pattern - start with one note on the high string. Skip one string and use sweeps when descending.',
              '4644 3533 2422 1311 2422 3533',
              '--du dudu dudu dudu --du --du',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 4 - Four note pattern - start with two notes on the high string. Skip one string and use sweeps when ascending.',
              '4464 3353 2242 1131 2242 3353',
              'udud -u-d -u-d -u-d udud udud',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 5 - Sweep strings 5 3 and 1, then strings 2 4 and 6.',
              '531246',
              'd--u--',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 6 - Sweep four strings, then play the first and last notes. Reverse the pattern when descending the strings',
              '65436363 54325252 43214141 12341414 23452525 34563636',
              'd---udud ud--udud ud--udud u---dudu du--dudu du--dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 7 - Four note pattern - start with two notes on the low string. Skip two strings and use sweeps when descending.',
              '6636 5525 4414 5525',
              '-d-u dudu dudu -d-u',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 8 - Four note pattern - start with one note on the low string. Skip two strings and use sweeps when ascending.',
              '6366 5255 4144 5255',
              'udud --ud --ud udud',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 9 - Four note pattern - start with one note on the high string. Skip two strings and use sweeps when descending.',
              '3633 2522 1411 2522',
              '--du dudu dudu --du',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 10 - Four note pattern - start with two notes on the high string. Skip two strings and use sweeps when ascending.',
              '3363 2252 1141 2252',
              'udud -u-d -u-d udud',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
        {
          lesson: 3,
          exercises: [
            [
              'Exercise 1 - Skip three strings with inside picking, start with the low string. Use sweeps when descending',
              '6626 5515',
              '-d-u dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 2 - Skip three strings with outside picking, start with the low string. Use sweeps when ascending',
              '6266 5155',
              'udud --ud',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 3 - Skip three strings with inside picking, start with the high string. Use sweeps when descending',
              '2622 1511',
              '--du dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 4 - Skip three strings with outside picking, start with the high string. Use sweeps when ascending',
              '22621151',
              'udud -u-d',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 5 - Sweep from the lower note to the higher note, then from the higher note to the lower note.',
              '62265115',
              '-du-d-u-',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 6 - Skip four strings with inside picking, starting with the lower string.',
              '6616',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 7 - Skip four strings with inside picking, starting with the higher string.',
              '1611',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 8 - Sweep from the 1st string to the 6th, then from the 6th to the 1st.',
              '6116',
              'd-u-',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 9 - Skip four strings with inside picking, sweep from the 6th string to the 1st string',
              '616',
              'd-u',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 10 - Skip four strings with inside picking, sweep from the 1st string to the 6th string',
              '116',
              'du-',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
        {
          lesson: 4,
          exercises: [
            [
              'Pattern 1 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '65465456 54354345 43243234 32132123 43243234 54354345',  //  Weird stuff happens if both of these
              '-d-ud-u- d--ud-u- d--ud-u- d--ud-u- -d-ud-u- -d-ud-u-',  //  two patterns aren't doubled like this.
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 1 (part two) - Skip the 3rd beat and continue with a downstroke on the next '&'.",
              '6546q456 5435q345 4324q234 3213q123 4324q234 5435q345',
              '-d-u-du- d--u-du- d--u-du- d--u-du- -d-u-du- -d-u-du-',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 2 - Play 4 ascending notes, then play the last two notes again before coming back.',
              '65434356 54323245 43212134 54323245',
              '-d--udu- d---udu- d---udu- -d--udu-',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 2 (part two) - Skip the '&' of the last beat.",
              '6543435q 5432324q 4321213q 5432324q',
              '-d--udu- d---udu- d---udu- -d--udu-',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 3 - Each measure has two inverted 4 note patterns. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '65463453 54352342 43241231 54352342',
              'ud-udu-d ud-udu-d ud-udu-d ud-udu-d',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 3 (part two) - Skip the 4th down beat and continue with a downstroke on the \'&\'.',
              '654634q3 543523q2 432412q1 543523q2',
              'ud-udu-d ud-udu-d ud-udu-d ud-udu-d',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 4 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '63543645 52432534 41321423 52432534',
              '-dud-udu d-ud-udu d-ud-udu -dud-udu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 4 (part two) - Skip the '&' of the 3rd beat and continue with an upstroke on the 4th beat.",
              '6354q645 5243q534 4132q423 5243q534',
              '-dud-udu d-ud-udu d-ud-udu -dud-udu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 5 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '66445345 55334234 44223123 55334234',
              '-d-u-du- dudu-du- dudu-du- -d-u-du-',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 5 (part two) - Skip the 2nd beat and continue with a downstroke on the next '&'.",
              '66q45345 55q34234 44q23123 55q34234',
              '-d--udu- du-dudu- du-dudu- -d--udu-',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
      ],
    },
    'Cross Picking': {
      title: 'Part 3: Cross Picking',
      lessons: [
        {
          lesson: 1,
          exercises: [
            [
              'Exercise 1 - Ascending banjo rolls, use cross picking',
              '65465465',
              'd-ud-udu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 2 - Descending banjo rolls, use cross picking',
              '45645645',
              'u-du-dud',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 3 - Ascending banjo rolls, use alternate picking',
              '65465465',
              'dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 4 - Descending banjo rolls, use alternate picking',
              '45645645',
              'dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 5 - Five ascending banjo rolls over two measures. Use cross picking and count 1 & 2 & 3 & 4 &',
              '65465465 46546545 65465465 46546545',
              'd-ud-ud- ud-ud-u-',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 6 - Five descending banjo rolls over two measures. Use cross picking and count 1 & 2 & 3 & 4 &',
              '45645645 64564565 45645645 64564565',
              'u-du-du- du-du-d-',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 7 - Five ascending banjo rolls over two measures. Use alternate picking',
              '65465465 46546545 65465465 46546545',
              'dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 8 - Five descending banjo rolls over two measures. Use alternate picking',
              '45645645 64564565 45645645 64564565',
              'dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 9 - Once you have a feel for banjo rolls, try being a little creative.',
              '65465434',
              'd-ud--u-',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 10 - This is a more complicated pattern for an extra challenge',
              '63543645',
              'dud-udu-',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
        {
          lesson: 2,
          exercises: [
            [
              'Exercise 1 - Use outside picking when ascending, and sweeps when descending',
              '66565545 44343323 22123323 44345545',
              '-dududud udududud udu--du- -du--du- -du--du-',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 2 - Use sweeps when ascending, and outside picking when descending',
              '65665455 43443233 21223233 43445455',
              'du-d-u-d -u-d-u-d -udududu dudududu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 3 - Use inside picking when ascending and sweeps when descending',
              '56554544 34332322 12112322 34334544',
              'Udududud Udududud dudu-d-u -d-u-d-u',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 4 - Use sweeps when ascending and outside picking when descending',
              '55654454 33432232 11212232 33434454',
              'dud--ud- -ud--ud- -udududu dudududu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 5 - Sweep the inside picking pattern when ascending, then sweep the outside picking pattern when descending',
              '65665455 43443233 22123323 44345545',
              'du-d-u-d -u-d-u-d udu--du- -du--du-',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 6 - Sweep the outside picking pattern when ascending, then sweep the inside picking pattern when descending',
              '55654454 33432232 12112322 34334544',
              'dud--ud- -ud--ud- ud-u-d-u -d-u-d-u',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],

            [
              'Exercise 7 - Sweep the inside picking pattern when ascending, and the outside picking pattern when descending.',
              '64665355 42443313 44245535',
              'du-d-u-d -u-dudu- -du--du-',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 8 - Sweep the outside picking pattern when ascending, and the inside picking pattern when descending.',
              '44643353 22421311 24223533',
              'dud--ud- -ud-ud-u -d-u-d-u',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],

            [
              'Exercise 9 - Sweep the inside picking pattern when ascending, and the outside picking pattern when descending.',
              '63665255 44145525 63665255 44145525',
              'du-d-u-d udu--du- du-d-u-d udu-udu-',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 10 - Sweep the outside picking pattern when ascending, and the inside picking pattern when descending.',
              '33632252 14112522 33632252 14112522',
              'dud--ud- ud-u-d-u dud--ud- ud-uud-u',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
        {
          lesson: 3,
          exercises: [
            [
              'Exercise 1 - Start with the 6th string and use all outside picking.',
              '65544332 21112233 445566',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 2 - Play one note per string and use all outside picking to skip one string ascending and descending.',
              '64534231324354',
              'dudu',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 3 - Sweep string 6 4 and 2, then strings 1 3 and 5. Use outside picking to change directions.',
              '642135',
              'd--u--',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 4 - Sweep four strings, then pick the 1st and last strings twice. Use all outside picking and reverse the order when descending.',
              '65436363 54325252 43214141 12341414 23452525 34563636',
              'd--ududu d--ududu d--udud- u--dudud u--dudud u--dudu-',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 5 - Play three notes per string, then skip three strings. One note per beat still.',
              '666222555111555222',
              'dudu',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 6 - Start on the 6th string and practice all outside picking while skipping three strings.',
              '62665155 66265515',
              'du-d-udu -dududu-',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 7 - Start on the 1st string and skip 3 strings. Use all sweeps and outside picking',
              '22621151 26221511',
              'dud--udu -dudud-u',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 8 - Play three notes on the 6th and 1st strings, alternately.',
              '666111666111 666111666111',
              'dudu',
              '6', // notes per measure
              '6/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 9 - Practice thinking about the direction of the next string',
              '61661611',
              'du-dud-u ',
              '4', // notes per measure
              '4/4', // time signature
              '1', // notes per beat
            ],
            [
              'Exercise 10 - Pick one base note and three treble notes again. Use sweeps and outside picking.',
              '62125121',
              'd-u-dudu',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
        {
          lesson: 4,
          exercises: [
            [
              'Pattern 1 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '65465456 54354345 43243234 32132123 43243234 54354345',
              'd-ud-u-d --ud-u-d --ud-u-d --ud-u-- d-ud-u-- d-ud-u--',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 1 (part two) - Skip the 3rd beat and continue with an upstroke on the next '&'.",
              '6546q456 5435q345 4324q234 3213q123 4324q234 5435q345',
              'd-ud-u-d --ud-u-d --ud-u-d --ud-u-- d-ud-u-- d-ud-u--',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 2 - Play 4 ascending notes, then play the last two notes again before coming back to the first two notes.',
              '65434356 54323245 43212134 54323245',
              'd--udu-d ---udu-d ---udu-- d--udu--',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 2 (part two) - Skip the '&' of the 2nd beat and continue with a downstroke on the 3rd beat.",
              '654q4356 543q3245 432q2134 543q3245',
              'd---du-d ----du-d ----du-- d---du--',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 3 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '65463453 54352342 43241231 54352342',
              'd-udu-du d-udu-du d-udu-du d-udu-du',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 3 (part two) - Skip the 4th beat and continue with an upstroke on the next '&'.",
              '654634q3 543523q2 432412q1 543523q2',
              'd-udu--u d-udu--u d-udu--u d-udu--u',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 4 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '63543645 52432534 41321423 52432534',
              'dud-udu- dud-udu- dud-udu- dud-udu-',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 4 (part two) - Skip the '&' of the 3rd beat and continue with an upstroke on the 4th beat.",
              '63543q45 52432q34 41321q23 52432q34',
              'dud-u--- dud-u--- dud-u--- dud-u---',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              'Pattern 5 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &.',
              '66445345 55334234 44223123 55334234',
              '-d-udu-d ud-udu-d ud-udu-- -d-udu--',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
            [
              "Pattern 5 (part two) - Skip the 2nd beat and continue with an upstroke on the next '&'.",
              '66q45345 55q34234 44q23123 55q34234',
              '-d-udu-d ud-udu-d ud-udu-- -d-udu--',
              '8', // notes per measure
              '8/4', // time signature
              '1', // notes per beat
            ],
          ],
        },
      ],
    },
  },
}

export const descriptions = {
  'Sweep Picking': {
    title: 'Section 1: Sweep Picking',
    description: [
      'Fast sweeps depend more on timing and finesse than physical force. Using just the tip of the pick helps to develop speed by keeping the string resistance down. Let your arm do most of the work. Moving the whole arm to play each string is also good practice whether sweeping or just picking individual notes.',
      'All four lessons practice with 1, 2 and 4 notes per beat, and the last two lessons push the metronome up to 80 bpm; just enough to be challenging. After this there is very little push towards speed.',
      'Slow means smooth, smooth means fast.',
    ],
    lessons: {
      'Sweeping Primer': {
        lesson: 1,
        title: 'Sweeping Primer',
        description: [
          'Remember to let your arm do most of the work. Focussing on a smooth technique will make it much easier to keep accurate timing.',
        ],
        numOfExercises: 3,
        minutes: 5,
      },
      'Inside / Outside Picking': {
        lesson: 2,
        title: 'Inside / Outside Picking',
        description: [
          'This lesson practices sweeps with inside / outside picking. Pay close attention to keep any unwanted tension from developing. Use this as a foundation for the next two lessons.',
        ],
        numOfExercises: 10,
        minutes: 3,
      },
      'Changing Directions': {
        lesson: 3,
        title: 'Changing Directions',
        description: [
          'This lesson practices 1, 2 and 4 notes per beat at double the tempo (80bpm). Try keeping a smooth technique, without any tension, throughout the entire lesson.',
        ],
        numOfExercises: 10,
        minutes: 3,
        metronomeSpeed: 80,
      },
      'Building Speed': {
        lesson: 4,
        title: 'Building Speed',
        description: [
          'Sweeping the same four strings should make it a little easier to change directions. Practicing on the lower (thicker) strings can add just a little extra resistance to each sweep.',
        ],
        numOfExercises: 10,
        minutes: 3,
        metronomeSpeed: 80,
      },
    },
  },
  'Picking Patterns': {
    title: 'Section 2: Picking Patterns',
    description: [
      "Three different approaches are taken here: alternate picking, economy picking and cross picking. In this study a 'sweep' is used any time two or more notes are picked in the same direction.",
      'These lessons are about gaining speed AND accuracy with things like string skipping by going VERY SLOWLY and really paying attention. Remember, slow means smooth... smooth means fast! Some definitions may vary from one source to another. The definitions given here are not necessarily definitive.',
    ],
    'Alternate Picking': {
      title: 'Part 1: Alternate Picking',
      description: [
        "Alternate picking is simple: keep moving in a continuous down/up motion. This makes the pick direction easy to work out; beats are picked with a downstroke, the &'s are picked with an up-stroke. It does not matter which string is picked next, the pick direction is always moving in a steady pendulum like motion. ",
      ],
      lessons: {
        'Single & Adjacent Strings': {
          title: 'Single & Adjacent Strings',
          numOfExercises: 15,
          minutes: 2,
        },
        'String Skipping': {
          title: 'String Skipping',
          numOfExercises: 10,
          minutes: 3,
        },
        'Skip 2 Strings': {
          title: 'Skip two strings',
          numOfExercises: 10,
          minutes: 3,
        },
        'Skip 3 strings': {
          title: 'Skip three strings',
          numOfExercises: 10,
          minutes: 3,
        },
        'Skip 4 strings': {
          title: 'Skip four strings',
          numOfExercises: 10,
          minutes: 3,
        },
        'Random Patterns': {
          title: 'Random Patterns.',
          description: [
            "Play one note per metronome click; count 1 - & - 2 - & - 3 - & - 4. Each pattern is practiced twice, skipping one note the second time through. Notice that the picking directions stay the same (down on the beat, up on the '&').",
          ],
          numOfExercises: 10,
          minutes: 3,
        },
      },
    },
    'Economy Picking': {
      title: 'Part 2: Economy Picking',
      description: [
        'In economy picking (as defined in this method) the pick always goes strait to each string, and sweeps are used when two or more strings can be played consecutively with one motion.',
      ],
      lessons: {
        'Adjacent Strings': {
          title: 'Adjacent strings',
          numOfExercises: 10,
          minutes: 3,
        },
        'Skip 1 & 2 strings': {
          title: 'Skip one and two strings',
          numOfExercises: 10,
          minutes: 3,
        },
        'Skip 3 & 4 strings': {
          title: 'Skip three and four strings',
          numOfExercises: 10,
          minutes: 3,
        },
        'Random Patterns': {
          title: 'Random Patterns.',
          numOfExercises: 10,
          minutes: 3,
        },
      },
    },
    'Cross Picking': {
      title: 'Part 3: Cross Picking',
      description: [
        [
          'Cross picking was a way to simulate 3 string banjo rolls. Sweeps are a part of cross picking, but where economy picking goes directly to each string, in cross picking each string is picked in the direction of the next string.',
        ],
      ],
      lessons: {
        'Banjo Rolls': {
          title: 'Banjo rolls',
          numOfExercises: 10,
          minutes: 3,
        },
        'Inside / Outside Picking': {
          title: 'Inside / Outside Picking',
          numOfExercises: 10,
          minutes: 3,
        },
        'Miscellaneous Exercises': {
          title: 'Miscellaneous Exercises',
          numOfExercises: 10,
          minutes: 3,
        },
        'Random Patterns': {
          title: 'Random Patterns.',
          numOfExercises: 10,
          minutes: 3,
        },
      },
    },
  },
}

//  Keeping the  exercises in a separate object makes the descriptions a lot easier to look through
// for (const section in descriptions) {
//     for (const part in descriptions[section].parts) {
//         for (const lesson in descriptions[section].parts[part].lessons) {
//             descriptions[section].parts[part].lessons[lesson].exercises = exercises[section].parts[part].lessons[lesson].exercises
//         }
//     }
// }

export const sections = descriptions
