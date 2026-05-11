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
            '6', // beats per measure
            '6/4', // time signature
            '1', // notes per beat
          ],
          [
            'Exercise 2 - Sweep up and down five strings, two notes per beat, three beats per measure. Skip the last half beat.',
            '54321x12345x',
            'd-----u-----',
            '6',
            '3/4',
            '2',
          ],
          [
            'Exercise 3 - Sweep up and down five strings, four notes per beat. Count: 1 - e - & - a - 2 (pause), 3 - e - & - a - 4 (pause)',
            '54321xxx12345xxx',
            'd-------u-------',
            '16',
            '4/4',
            '4',
          ],
        ],
      },
      {
        lesson: 2,
        exercises: [
          [
            'Exercise 1 - Sweep up and down five strings, one note per beat.',
            '5432112345',
            'd----u----',
            '5', // beats per measure
            '5/4', // time signature
            '1', // notes per beat
          ],
          [
            'Exercise 2 - Pick one note per beat, use inside picking to change directions.',
            '54321234',
            'ud--du--',
            '4', // beats per measure
            '4/4', // time signature
            '1', // notes per beat
          ],
          [
            'Exercise 3 - Pick one note per beat, use outside picking to change directions.',
            '54321234',
            'd---u---',
            '8', // beats per measure
            '4/4', // time signature
            '1', // notes per beat
          ],
          [
            "Exercise 4 - Sweep up and down five strings, two notes per beat. Skip the '&' of the 3rd beat.",
            '54321x12345x',
            'd-----u-----',
            '6', // beats per measure
            '6/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 5 - Pick two notes per beat. Use inside picking to change directions.',
            '54321234',
            'ud--du--',
            '8', // beats per measure
            '4/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 6 - Pick two notes per beat. Use outside picking to change directions.',
            '54321234',
            'd---u---',
            '8', // beats per measure
            '4/4', // time signature
            '2', // notes per beat
          ],
          [
            'Exercise 7 - Sweep up and down five strings, four notes per beat. Count: 1 - e - & - a - 2 - (pause) - 3 - e - & - a - 4.',
            '54321xxx12345xxx',
            'd----xxxu----xxx',
            '16', // beats per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 8 - Pick four notes per beat. Use inside picking to change directions.',
            '54321234',
            'ud--du--',
            '16', // beats per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 9 - Pick four notes per beat. Use outside picking to change directions.',
            '54321234',
            'd---u---',
            '16', // beats per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
          [
            'Exercise 10 - Pick four notes per beat. Freely alternate between inside and outside picking',
            '54321234',
            'ud--du---',
            '16', // beats per measure
            '4/4', // time signature
            '4', // notes per beat
          ],
        ],
      },
      {
        lesson: 3,
        exercises: [
          [
            'Exercise 1 - Sweep up five strings then down all five strings, one note per beat. The metronome is set to 80bpm for this whole lesson.',
            '54321-12345-54321-12345-54321-123',
            'd-----u-----d-----u-----d-----u--',
          ],
          [
            'Exercise 2 - Sweep up five strings then down all five strings Pick two notes per beat and skip the last half beat.',
            '54321x-12345x-54321x-12345x-54321',
            'd----x-u----x-d----x-u----x-d----',
          ],
          [
            'Exercise 3 - One sweep at a time, four notes per beat. Count: 1 - e - & - a - 2 (pause) 3 - e - & - a - 4.',
            '54321xxx12345xxx-54321xxx12345xxx',
            'd----xxxu----xxx-d----xxxu----xxx-d----',
          ],
          /////////////////////////////////////////////////////////
          ////////////////////////////////////////////////////////
          [
            'Exercise 4 - One sweep at a time, two notes per beat. Use outside picking for the last note',
            '54321x-12345x-54321x-12345x-54321',
            'd---ux-u---dx-d---ux-u---dx-d----',
          ],
          [
            'Exercise 5 - One sweep at a time, four notes per beat. Use outside picking for the last note',
            '54321xxx12345xxx-54321xxx12345xxx',
            'd---u---u---d----d---u---u---d---',
          ],
          [
            'Exercise 6 - Use inside picking to pick one extra note. Play two notes per beat.',
            '543212xx-123454xx-543212xx-123454xx-54321',
            'd----u---u----d---d----u---u----d---d----',
          ],
          [
            'Exercise 7 - Use inside picking to pick one extra note. Play four notes per beat.',
            '543212xx123454xx-543212xx123454xx-54321',
            'd----u--u----d---d----u--u----d---d----',
          ],
          [
            'Exercise 8 - Use outside picking, then pick one extra note. Play two notes per beat.',
            '543212xx-123454xx-543212xx-123454xx-54321',
            'd---u----u---d----d---u----u---d----d---u',
          ],
          [
            'Exercise 9 - Use outside picking to pick one extra note. Play four notes per beat.',
            '543212xx123454xx-543212xx123454xx',
            'd---u---u---d----d---u---u---d----',
          ],
          [
            'Exercise 10 - Play four note per beat with the extra note added in. Alternate freely between inside and outside picking.',
            '543212xx123454xx-543212xx123454xx',
            'd----u--u----d---d---u---u---d---',
          ],
        ],
      },
      {
        lesson: 4,
        exercises: [
          [
            'Exercise 1 - Sweep up and down the first four strings, one note per beat.',
            '4321-1234-4321-1234-4321-1234-4321',
            'd----u----d----u----d----u----d---',
          ],
          [
            'Exercise 2 - Sweep up and down the first four strings, two notes per beat.',
            '43211234-43211234-43211234-4321',
            'd---u----d---u----d---u----d---',
          ],
          [
            'Exercise 3 - Sweep up and down the first four strings, four notes per beat.',
            '4321123443211234-432112344321',
            'd---u---d---u----d---u---d---',
          ],
          [
            'Exercise 4 - Sweep from the 5th string to the 2nd and back. Play four notes per beat.',
            '5432234554322345-543223455432',
            'd---u---d---u----d---u---d---',
          ],
          [
            'Exercise 5 - Sweep from the 6th string to the 3rd and back. Play four notes per beat.',
            '6543345665433456-654334566543',
            'd---u---d---u----d---u---d---',
          ],
          [
            'Exercise 6 - Use inside picking to sweep five strings up & down. Play two notes per beat.',
            '54321234-54321234-54321234-5432',
            'ud---u----d---u----d---u----d--',
          ],
          [
            'Exercise 7 - Use inside picking like before, but play four notes per beat.',
            '5432123454321234-543212345432',
            'ud---u---d---u----d---u---d--',
          ],
          [
            'Exercise 8 - Use outside picking to sweep five strings up & down. Play two notes per beat.',
            '54321234-54321234-54321234-5432',
            'd---u----d---u----d---u----d---',
          ],
          [
            'Exercise 9 - Use outside picking like before, but play four notes per beat.',
            '5432123454321234-543212345432',
            'd---u---d---u----d---u---d---',
          ],
          [
            'Exercise 10 - Practice any of these three patterns one note per beat, then play two and four notes per beat. Use both inside and outside picking.',
            '65431234 - 43213456 - 65321245',
            '--------   --------   --------',
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
              '66666666-66666666-66666666-6666',
              'dudududu-e',
            ],
            [
              'Exercise 2 - Pick just the 5th string',
              '55555555-55555555-55555555-5555',
              'dudududu-e',
            ],
            [
              'Exercise 3 - Pick just the 4th string',
              '44444444-44444444-44444444-4444',
              'dudududu-e',
            ],
            [
              'Exercise 4 - Pick just the 3rd string',
              '33333333-33333333-33333333-3333',
              'dudududu-e',
            ],
            [
              'Exercise 5 - Pick just the 2nd string',
              '22222222-22222222-22222222-2222',
              'dudududu-e',
            ],
            [
              'Exercise 6 - Pick just the 1st string',
              '11111111-11111111-11111111-1111',
              'dudududu-e',
            ],
            [
              'Exercise 7 - Pick four notes per string',
              '66665555-44443333-22221111-2222',
              'dudududu-e',
            ],
            [
              'Exercise 8 - Four note pattern; inside picking - start with the low string',
              '66565545-44343323-22123323-4434',
              'dudududu-e',
            ],
            [
              'Exercise 9 - Four note pattern; outside picking - start with the low string',
              '65665455-43443233-21223233-4344',
              'dudududu-e',
            ],
            [
              'Exercise 10 - Four note pattern; inside picking - start with the high string',
              '56554544-34332322-12112322-3433',
              'dudududu-e',
            ],
            [
              'Exercise 11 - Four note pattern; outside picking - start with the high string',
              '55654454-33432232-11212232-3343',
              'dudududu-e',
            ],
            [
              'Exercise 12 - Arpeggiate all six stings with alternate picking',
              '6543212345-6543212345-65432123',
              'dududududu-e',
            ],
            [
              'Exercise 13 - Pick three notes per string, one note per beat',
              '66655544-43332221-11222333-4445',
              'dudududu-e',
            ],
            [
              'Exercise 14 - Pick three notes per string, three notes per beat.',
              '666555444333-222111222333-4445',
              'dudududududu-e',
            ],
            [
              'Exercise 15 - Rhythm exercise - pick two notes per beat, count the beats.',
              '666555-444333-222111-222333-444',
              'dududu-e',
            ],
          ],
        },
        {
          lesson: 2,
          exercises: [
            [
              'Exercise 1 - Pick four notes per string, skip one string',
              '66664444-55553333-44442222-3333',
              'dudududu-e',
            ],
            [
              'Exercise 2 - Pick two notes per string, skip one string',
              '66445533-44223311-33224433-5544',
              'dudududu-e',
            ],
            [
              'Exercise 3 - Start on the 5th string and pick each string once. This uses inside picking to skip one string',
              '46453423-13243546-45342313-2435',
              'dudududu-e',
            ],
            [
              'Exercise 4 - Start on the 6th string and pick each string once. This uses outside picking to skip one string',
              '64534231-32435464-53423132-4354',
              'dudududu-e',
            ],
            [
              'Exercise 5 - A four note pattern with inside picking. Skip one string Starting with the low string.',
              '66465535-44243313-44245535-6646',
              'dudududu-e',
            ],
            [
              'Exercise 6 - A four note pattern with outside picking. Skip one string Starting with the low string.',
              '64665355-42443133-42445355-6466',
              'dudududu-e',
            ],
            [
              'Exercise 7 - A four note pattern with inside picking. Skip one string Starting with the high string.',
              '46443533-24221311-24223533-4644',
              'dudududu-e',
            ],
            [
              'Exercise 8 - A four note pattern with outside picking. Skip one string Starting with the high string.',
              '44643353-22421131-22423353-4464',
              'dudududu-e',
            ],
            [
              'Exercise 9 - Pick strings 6, 4 and 2, then pick strings 1, 3 and 5',
              '642135642135-642135642135-6421 35642135',
              'dudududududu-e',
            ],
            [
              'Exercise 10 - Pick strings 5, 3 and 1, then pick strings 2, 4 and 6',
              '531246531246-531246531246-531 ',
              'dudududududu-e',
            ],
          ],
        },
        {
          lesson: 3,
          exercises: [
            [
              'Exercise 1 - Play four adjacent strings, then play the first and last twice. Reverse the order of the strings when descending.',
              '65436363-54325252-43214141-1234',
              'dudududu-e-----------------dudu',
            ],
            [
              'Exercise 2 - Pick four notes per string. Skip two strings',
              '66663333-55552222-44441111-4444',
              'dudududu-e',
            ],
            [
              'Exercise 3 - Pick two notes per string. Skip two strings',
              '66335522-44114422-55336633-5522',
              'dudududu-e',
            ],
            [
              'Exercise 4 - Pick each string only once starting on the 3rd string. Use inside picking to skip two strings.',
              '36352414-25363524-14253635-2414',
              'dudududu-e',
            ],
            [
              'Exercise 5 - Pick each string only once starting on the 6th string. Use outside picking to skip two strings.',
              '63524142-53635241-42536352-4142',
              'dudududu-e',
            ],
            [
              'Exercise 6 - A four note pattern with inside picking. Skip two strings Starting with the low string.',
              '66365525-44145525-66365525-4414',
              'dudududu-e',
            ],
            [
              'Exercise 7 - A four note pattern with outside picking. Skip two strings Starting with the low string.',
              '63665255-41445255-63665255-4144',
              'dudududu-e',
            ],
            [
              'Exercise 8 - A four note pattern with inside picking. Skip two strings starting with the high string.',
              '36332522-14112522-36332522-1411',
              'dudududu-e',
            ],
            [
              'Exercise 9 - A four note pattern with outside picking. Skip two strings starting with the high string.',
              '33632252-11412252-33632252-1141',
              'dudududu-e',
            ],
            [
              'Exercise 10 -  First skip one string twice, then play the first and last notes twice. Reverse the order of the strings when descending.',
              '64536363-53425252-42314141-1324',
              'dudududu-e-----------------dudu',
            ],
          ],
        },
        {
          lesson: 4,
          exercises: [
            [
              'Exercise 1 - Pick four notes per string. Skip three strings.',
              '66662222-55551111-55552222-6666',
              'dudududu-e',
            ],
            [
              'Exercise 2 - Pick two notes per string. Skip three strings.',
              '66225511-55226622-55115522-6622',
              'dudududu-e',
            ],
            [
              'Exercise 3 - Pick each string only once starting on the 2nd string. Use inside picking to skip three strings.',
              '26251526-25152625-15262515-2625',
              'dudududu-e',
            ],
            [
              'Exercise 4 - Pick each string only once starting on the 6th string. Use outside picking to skip three strings.',
              '62515262-51526251-52625152-6251',
              'dudududu-e',
            ],
            [
              'Exercise 5 - A four note pattern with inside picking. Skip three strings starting with the low string',
              '66265515-66265515-66265515-6626',
              'dudududu-e',
            ],
            [
              'Exercise 6 - A four note pattern with outside picking. Skip three strings starting with the low string',
              '62665155-62665155-62665155-6266',
              'dudududu-e',
            ],
            [
              'Exercise 7 - A four note pattern with inside picking. Skip three strings starting with the high string',
              '26221511-26221511-26221511-2622',
              'dudududu-e',
            ],
            [
              'Exercise 8 - A four note pattern with outside picking. Skip three strings starting with the high string',
              '22621151-22621151-22621151-2262',
              'dudududu-e',
            ],
            [
              'Exercise 9 - Skip three strings. Start with the lower string when ascending, and the higher string when descending.',
              '62625151-15152626-62625151-1515',
              'dudududu-e',
            ],
            [
              'Exercise 10 - This uses a finger-picking type pattern; one base note followed by three notes on the 1st and 2nd strings.',
              '62125121-62125121-62125121-6212',
              'dudududu-e',
            ],
          ],
        },
        {
          lesson: 5,
          exercises: [
            [
              'Exercise 1 - Pick four notes per string. Skip four strings.',
              '66661111-66661111-66661111-6666',
              'dudududu-e',
            ],
            [
              'Exercise 2 - Pick two notes per string. Skip four strings.',
              '66116611-66116611-66116611-6611',
              'dudududu-e',
            ],
            [
              'Exercise 3 - Pick each string only once starting on the 1st string. Use inside picking to skip four strings.',
              '16161616-16161616-16161616-1616',
              'dudududu-e',
            ],
            [
              'Exercise 4 - Pick each string only once starting on the 6th string. Use outside picking to skip four strings.',
              '61616161-61616161-61616161-6161',
              'dudududu-e',
            ],
            [
              'Exercise 5 - A four note pattern with inside picking. Skip four strings starting with the low string.',
              '66166616-66166616-66166616-6616',
              'dudududu-e',
            ],
            [
              'Exercise 6 - A four note pattern with outside picking. Skip four strings starting with the low string.',
              '61666166-61666166-61666166-6166',
              'dudududu-e',
            ],
            [
              'Exercise 7 - A four note pattern with inside picking. Skip four strings starting with the high string.',
              '16111611-16111611-16111611-1611',
              'dudududu-e',
            ],
            [
              'Exercise 8 - A four note pattern with outside picking. Skip four strings starting with the high string.',
              '11611161-11611161-11611161-1161',
              'dudududu-e',
            ],
            [
              'Exercise 9 - Play two notes on the 6th string and one on the 1st string.',
              '661661-661661-661661-661661-6616',
              'dududu-e',
            ],
            [
              'Exercise 10 - Play two notes on the 1st string and one on the 6th string.',
              '116116-116116-116116-116116-116',
              'dududu-e',
            ],
          ],
        },
        {
          lesson: 6,
          exercises: [
            [
              'Pattern 1 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '65465456-54354345-43243234-3213',
              'dudududu',
            ],
            [
              "Pattern 1 (part two) - Skip the 3rd beat and continue with an upstroke on the next '&'.",
              '6546e456-5435d345-4324c234-3213',
              'dudu udu',
            ],
            [
              'Pattern 2 - Play 4 ascending notes, then play the last two note3s again before coming back to the first note.',
              '65434356-54323245-43212134-5432',
              'dudududu',
            ],
            [
              "Pattern 2 (part two) - Skip the '&' of the 2nd beat and continue with a downstroke on the 3rd beat.",
              '654c4356-543b3245-432a2134-543b',
              'dud dudu',
            ],
            [
              'Pattern 3 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '65463454-54352342-43241231-5434',
              'dudududu',
            ],
            [
              "Pattern 3 (part two) - Skip the 4th beat and continue with an upstroke on the next '&'.",
              '654634e4-543523d2-432412c1-5434',
              'dududu u',
            ],
            [
              'Pattern 4 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '63543645-52432534-41321423-5243',
              'dudududu',
            ],
            [
              "Pattern 4 (part two) - Skip the '&' of the 3rd beat and continue with a downstroke on the 4th beat.",
              '63543f45-52432e34-41321d23-5243',
              'dudud du',
            ],
            [
              'Pattern 5 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '66445345-55334234-44223123-5533',
              'dudududu',
            ],
            [
              "Pattern 5 (part two) - Skip the 2nd beat and continue with an upstroke on the next '&'.",
              '66d45345-55c34234-44b23123-55a3',
              'du ududu',
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
              '65432123-45654321-23456543-2123',
              'd----du----ud---d-u---ud----du-',
              'Exercise One',
            ],
            [
              'Exercise 2 - Four note pattern - start with two notes on the low string. Use sweeps when descending.',
              '66565545-44343323-22123323-4434',
              'dudududu-dudududu-dudu-d-u--d-u',
            ],
            [
              'Exercise 3 - Four note pattern - start with one note on the low string. Use sweeps when ascending.',
              '65665455-43443233-21223233-4344',
              'd-ud--ud---ud--ud---ududud-udud',
            ],
            [
              'Exercise 4 - Four note pattern - start with one note on the high string. Use sweeps when descending.',
              '56554544-34332322-12112322-3433',
              'dudududu-dudududu-dudu--du---du',
            ],
            [
              'Exercise 5 - Four note pattern - start with two notes on the high string. Use sweeps when ascending.',
              '55654454-33432232-11212232-3343',
              'du-d-u-d--u-d-u-d--u-dudud-udud',
            ],
            [
              'Exercise 6 - Pick three notes per string, one note per beat',
              '66655544-43332221-11222333-4445',
              'dud-ud-u-d-ud-ud--ududu-du--du-',
            ],
            [
              'Exercise 7 - Pick three notes per string, three notes per beat',
              '666555444333-222111222333-4445',
              'dud-ud-ud-ud--ud-ududu-du--du',
            ],
            [
              "Exercise 8 - Pick two notes per beat. For an extra challenge, try counting 1 & 2 & 3 & 4 &. It's different without alternate picking.",
              '66655544-43332221-11222333-4445',
              'dud-ud-u-d-ud-ud--ududu-du--du-',
            ],
            [
              'Exercise 9 - Ascend and descend with two notes per string. The only sweeps are when changing directions.',
              '66554433-22112233-44556655-4433',
              'dudududu-dudu-dud-ududud-u-dudu',
            ],
            [
              'Exercise 10 - Use the arrow keys to go to any of the exercises in this lesson.',
              ' ',
              ' ',
            ],
          ],
        },
        {
          lesson: 2,
          exercises: [
            [
              'Exercise 1 - Four note pattern - start with two notes on the low string. Skip one string and use sweeps when descending.',
              '66465535-44243313-44245535-6646',
              'dudududu-dudududu-ud-u-d-u--d-u',
            ],
            [
              'Exercise 2 - Four note pattern - start with one note on the low string. Skip one string and use sweeps when ascending.',
              '64665355-42443133-42445355-6466',
              'd-ud--ud---ud--ud-udududud-udud',
            ],
            [
              'Exercise 3 - Four note pattern - start with one note on the high string. Skip one string and use sweeps when descending.',
              '46443533-24221311-24223533-4644',
              'dudududu-dudududu---du--du---du',
            ],
            [
              'Exercise 4 - Four note pattern - start with two notes on the high string. Skip one string and use sweeps when ascending.',
              '44643353-22421131-22423353-4464',
              'du-d-u-d--u-d-u-d-udududud-udud',
            ],
            [
              'Exercise 5 - Sweep strings 5 3 and 1, then strings 2 4 and 6.',
              '531246531246-531246531246-5312',
              'd--u--d--u-- d--u--d--u-- d--u',
            ],
            [
              'Exercise 6 - Sweep four strings, then play the first and last notes. Reverse the pattern when descending the strings',
              '65436363-54325252-43214141-1234',
              'd---udud ud--udud ud--udud u',
            ],
            [
              'Exercise 7 - Four note pattern - start with two notes on the low string. Skip two strings and use sweeps when descending.',
              '66365525-44145525-66365525-4414',
              'dudududu-duduuddu-uddududu-dudu',
            ],
            [
              'Exercise 8 - Four note pattern - start with one note on the low string. Skip two strings and use sweeps when ascending.',
              '63665255-41445255-63665255-4144',
              'ddudddud-ddududud-udud',
            ],
            [
              'Exercise 9 - Four note pattern - start with one note on the high string. Skip two strings and use sweeps when descending.',
              '36332522-14112522-36332522-1411',
              'dudududu-dudu--du---dududu-dudu',
            ],
            [
              'Exercise 10 - Four note pattern - start with two notes on the high string. Skip two strings and use sweeps when ascending.',
              '33632252-11412252-33632252-1141',
              'du-d-u-d -u-dudud ududduud du',
            ],
          ],
        },
        {
          lesson: 3,
          exercises: [
            [
              'Exercise 1 - Skip three strings with inside picking, start with the low string. Use sweeps when descending',
              '66265515-66265515-66265515-6626',
              'dudududu -d-ududu -d-ududu -d-u',
            ],
            [
              'Exercise 2 - Skip three strings with outside picking, start with the low string. Use sweeps when ascending',
              '62665155-62665155-62665155-6266',
              'd-ud--ud udud--ud udud--ud udud',
            ],
            [
              'Exercise 3 - Skip three strings with inside picking, start with the high string. Use sweeps when descending',
              '26221511-26221511-26221511-2622',
              'dudududu --dududu --dududu --du',
            ],
            [
              'Exercise 4 - Skip three strings with outside picking, start with the high string. Use sweeps when ascending',
              '22621151-22621151-22621151-2262',
              'du-d-u-d udud-u-d udud-u-d udud',
            ],
            [
              'Exercise 5 - Sweep from the lower note to the higher note, then from the higher note to the lower note.',
              '62265115-62265115-62265115-6226',
              'd-u-d-u- d-u-d-u- d-u-d-u- d-u-',
            ],
            [
              'Exercise 6 - Skip four strings with inside picking, starting with the lower string.',
              '66166616-66166616-66166616-6616',
              'dudududu due',
            ],
            [
              'Exercise 7 - Skip four strings with inside picking, starting with the higher string.',
              '16111611-16111611-16111611-1611',
              'dudududu due',
            ],
            [
              'Exercise 8 - Sweep from the 1st string to the 6th, then from the 6th to the 1st.',
              '61166116-61166116-61166116-6116',
              'd-u-d-u- d-u-d-u- d-u-d-u- d-u-',
            ],
            [
              'Exercise 9 - Skip four strings with inside picking, sweep from the 6th string to the 1st string',
              '616616-616616-616616-616616-616',
              'd-ud-u d-ud-u d-ud-u d-ud-u d-u',
            ],
            [
              'Exercise 10 - Skip four strings with inside picking, sweep from the 1st string to the 6th string',
              '11611611-61161161-16116116-1161',
              'du-du-du -du-du-d u-du-du- du-d',
            ],
          ],
        },
        {
          lesson: 4,
          exercises: [
            [
              'Pattern 1 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '65465456-54354345-43243234-3213',
              'ud-ud-u- d--ud-u- d--ud-u- d--u',
            ],
            [
              "Pattern 1 (part two) - Skip the 3rd beat and continue with a downstroke on the next '&'.",
              '6546e456-5435d345-4324c234-3213',
              'ud-u du- d--u du- d--u du- d--u',
            ],
            [
              'Pattern 2 - Play 4 ascending notes, then play the last two notes again before coming back to the first two notes.',
              '65434356-54323245-43212134-5432',
              'ud--udu- d---udu- d---udu- ud--',
            ],
            [
              "Pattern 2 (part two) - Skip the '&' of the 2nd beat and continue with an upstroke on the 3rd beat.",
              '654c4356-543b3245-432a2134-543b',
              'ud--udu- d---udu- d---udu- ud--',
            ],
            [
              'Pattern 3 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '65463453-54352342-43241231-5435',
              'ud-udu-d ud-udu-d ud-udu-d ud-u',
            ],
            [
              'Pattern 3 (part two) - Skip the 4th beat and continue with a downstroke on the next &.',
              '654634e3-543523d2-432412c1-5435',
              'ud-udu-d ud-udu-d ud-udu-d ud-u',
            ],
            [
              'Pattern 4 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '63543645-52432534-41321423-5243',
              'udud-udu d-ud-udu d-ud-udu -dud',
            ],
            [
              "Pattern 4 (part two) - Skip the '&' of the 3rd beat and continue with an upstroke on the 4th beat.",
              '63543f45-52432e34-41321d23-5243',
              'udud- u- d-ud- u- d-ud- u- -dud',
            ],
            [
              'Pattern 5 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '66445345-55334234-44223123-5533',
              'ud-u-du- dudu-du- dudu-du- -d-u',
            ],
            [
              "Pattern 5 (part two) - Skip the 2nd beat and continue with a downstroke on the next '&'.",
              '66d45345-55c34234-44b23123-55a3',
              'ud -udu- du dudu- du dudu- -d--',
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
              '65465465-65465465-65465465-6546',
              'd-ud-udu d-ud-udu',
            ],
            [
              'Exercise 2 - Descending banjo rolls, use cross picking',
              '45645645-45645645-45645645-4564',
              'u-du-dud u-du-dud',
            ],
            [
              'Exercise 3 - Ascending banjo rolls, use alternate picking',
              '65465465-65465465-65465465-6546',
              'dudududu',
            ],
            [
              'Exercise 4 - Descending banjo rolls, use alternate picking',
              '45645645-45645645-45645645-4564',
              'dudududu',
            ],
            [
              'Exercise 5 - Five ascending banjo rolls over two measures. Use cross picking and count 1 & 2 & 3 & 4 &',
              '65465465-46546545-65465465-4654',
              'd-ud-ud- ud-ud-u-',
            ],
            [
              'Exercise 6 - Five descending banjo rolls over two measures. Use cross picking and count 1 & 2 & 3 & 4 &',
              '45645645-64564565-45645645-6456',
              'u-du-du- du-du-d-',
            ],
            [
              'Exercise 7 - Five ascending banjo rolls over two measures. Use alternate picking',
              '65465465-46546545-65465465-4654',
              'dudududu',
            ],
            [
              'Exercise 8 - Five descending banjo rolls over two measures. Use alternate picking',
              '45645645-64564565-45645645-6456',
              'dudududu',
            ],
            [
              'Exercise 9 - Once you have a feel for banjo rolls, try changing it up a little.',
              '65465434-65465434-65465434-6546',
              'd-ud--u-',
            ],
            [
              'Exercise 10 - This is a more complicated pattern for an extra challenge',
              '63543645-63543645-63543645-6354',
              'dud-udu-',
            ],
          ],
        },
        {
          lesson: 2,
          exercises: [
            [
              'Exercise 1 - Use inside picking when ascending, and sweeps when descending',
              '66565545-44343323-22123323-4434',
              'dudududu dudududu dudu-du- -duu',
            ],
            [
              'Exercise 2 - Use sweeps when ascending, and outside picking when descending',
              '65665455-43443233-21223233-4344',
              'du-d-u-d -u-d-u-d -udududu dudu',
            ],
            [
              'Exercise 3 - Use inside picking when ascending and sweeps when descending',
              '56554544-34332322-12112322-3433',
              'dudududu-dudududu-dudu-d-u -d-u',
            ],
            [
              'Exercise 4 - Use sweeps when ascending and outside picking when descending',
              '55654454-33432232-11212232-3343',
              'dud--ud- -ud--ud- -udududu dudu',
            ],
            [
              'Exercise 5 - Sweep the inside picking pattern when ascending, then sweep the outside picking pattern when descending',
              '65665455-43443233-22123323-4434',
              'du-d-u-d -u-d-u-d -udu-du- -du-',
            ],
            [
              'Exercise 6 - Sweep the outside picking pattern when ascending, then sweep the inside picking pattern when descending',
              '55654454-33432232-12112322-3433',
              'dud--ud- -ud--ud- ud-u--du --du',
            ],

            [
              'Exercise 7 - Sweep the inside picking pattern when ascending, and the outside picking pattern when descending.',
              '64665355-42443313-44245535-6466',
              'du-d-u-d du-dudu- -du--du- du-d',
            ],
            [
              'Exercise 8 - Sweep the outside picking pattern when ascending, and the inside picking pattern when descending.',
              '44643353-22421311-24223533-4464',
              'dud--ud- -ud-ud-u -d-u-d-u dud-',
            ],

            [
              'Exercise 9 - Sweep the inside picking pattern when ascending, and the outside picking pattern when descending.',
              '63665255-44145525-63665255-4414',
              'du-d-u-d udu--du- du-d-u-d udu-',
            ],
            [
              'Exercise 10 - Sweep the outside picking pattern when ascending, and the inside picking pattern when descending.',
              '33632252-14112522-33632252-1411',
              'dud--ud- ud-u-d-u dud--ud- ud-u',
            ],
          ],
        },
        {
          lesson: 3,
          exercises: [
            [
              'Exercise 1 - Start with the 6th string and use all outside picking.',
              '65544332-21112233-44556665-5443',
              'dudue--- -udude-- ----dudue ',
            ],
            [
              'Exercise 2 - Play one note per string and use all outside picking to skip one string ascending, then descending, the strings.',
              '64534231-32435464-53423132-4354',
              'dudue',
            ],
            [
              'Exercise 3 - Sweep string 6 4 and 2, then strings 1 3 and 5. Use outside picking to change directions.',
              '642135642135-642135642135-6421',
              'd--u--d--u--',
            ],
            [
              'Exercise 4 - Sweep four strings, then pick the 1st and last strings twice. Use all outside picking and reverse the order when descending.',
              '65436363-54325252-43214141-1234',
              'd--ududu e------- -------d uuud',
            ],
            [
              'Exercise 5 - Play three notes per string, then skip three strings. One note per beat still.',
              '666222555111-555222666222-555',
              'dudududude',
            ],
            [
              'Exercise 6 - Start on the 6th string and practice all outside picking while skipping three strings.',
              '62665155-66265515-62665155-6626',
              'du-d-udu udududu-',
            ],
            [
              'Exercise 7 - Start on the 1st string and skip 3 strings. Use all sweeps and outside picking',
              '22621151-26221511-22621151-2622',
              'dud--udu -dudud-u',
            ],
            [
              'Exercise 8 - Play three notes on the 6th and 1st strings, alternately.',
              '666111666111-666111666111-666',
              'dudududude',
            ],
            [
              'Exercise 9 - Practice thinking about the direction of the next string',
              '61661611-61661611-61661611-6166',
              'du-dud-ue ',
            ],
            [
              'Exercise 10 - Pick one base note and three treble notes again. Use sweeps and outside picking.',
              '62125121-62125121-62125121-6212',
              'd-u-dudue',
            ],
          ],
        },
        {
          lesson: 4,
          exercises: [
            [
              'Pattern 1 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '65465456-54354345-43243234-3213',
              'd-ud-u-d --ud-u-d --ud-u-d --ud',
            ],
            [
              "Pattern 1 (part two) - Skip the 3rd beat and continue with an upstroke on the next '&'.",
              '6546e456-5435d345-4324c234-3213',
              'd-ud-u-d --ud-u-d --ud-u-d --ud ',
            ],
            [
              'Pattern 2 - Play 4 ascending notes, then play the last two notes again before coming back to the first two notes.',
              '65434356-54323245-43212134-5432',
              'd--udu-d ---udu-d ---udu-- d--u',
            ],
            [
              "Pattern 2 (part two) - Skip the '&' of the 2nd beat and continue with a downstroke on the 3rd beat.",
              '654c4356-543b3245-432a2134-543b',
              'd-u du-d --u du-d --u du-- d-u ',
            ],
            [
              'Pattern 3 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '65463453-54352342-43241231-5435',
              'd-udu-du d-udu-du d-udu-du d-ud',
            ],
            [
              "Pattern 3 (part two) - Skip the 4th beat and continue with an upstroke on the next '&'.",
              '654634e3-543523d2-432412c1-5435',
              'd-udud u d-udud u d-udud u d-ud',
            ],
            [
              'Pattern 4 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '63543645-52432534-41321423-5243',
              'dud-udu- dud-udu- dud-udu- dud-',
            ],
            [
              "Pattern 4 (part two) - Skip the '&' of the 3rd beat and continue with an upstroke on the 4th beat.",
              '63543f45-52432e34-41321d23-5243',
              'dud-u -- dud-u -- dud-u -- dud-',
            ],
            [
              'Pattern 5 - Play all 8 notes in each pattern. Count 1 - & - 2 - & - 3 - & - 4 - &. This means each click is only one half beat (1/2).',
              '66445345-55334234-44223123-5533',
              'ud-udu-d ud-udu-d ud-udu-- -d-u',
            ],
            [
              "Pattern 5 (part two) - Skip the 2nd beat and continue with an upstroke on the next '&'.",
              '66d45345-55c34234-44b23123-55a3',
              'ud-udu-d ud-udu-d ud-udu-- -d-u',
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
          'This lesson practices sweeps with inside / outside picking. Pay close attention to how you hold the pick so no unwanted tension develops. Use this as a foundation for the next two lessons.',
        ],
        numOfExercises: 10,
        minutes: 3,
      },
      'Changing Directions': {
        lesson: 3,
        title: 'Changing Directions',
        description: [
          'This lesson practices 1, 2 and 4 notes per beat at double the tempo (80bpm). The challenge is to keep a smooth technique throughout the entire lesson.',
        ],
        numOfExercises: 10,
        minutes: 3,
        metronomeSpeed: 80,
      },
      'Building Speed': {
        lesson: 4,
        title: 'Building Speed',
        description: [
          'Sweeping the same four strings should make it a little easier to create smooth sweeps (no inside or outside picking). Practicing on the lower (thicker) strings can add just a little extra resistance to each sweep.',
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
      'These lessons are about gaining speed AND accuracy with things like string skipping by going VERY SLOWLY and really paying attention. Remember, slow is smooth... smooth is fast! The definitions of these things may vary from one source of instruction to another. The definitions given here are for easier',
      "Three different approaches are taken here: alternate picking, economy picking and cross picking. In this study a 'sweep' is used any time two or more notes are picked in the same direction.",
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
