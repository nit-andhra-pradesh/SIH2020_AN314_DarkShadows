// import * as React from 'react';


// import { SafeAreaView, ScrollView, FlatList, Platform, Text, StyleSheet, Dimensions, StatusBar } from 'react-native';



// const DATA = [
//   {
//     id: 1,
//     question: 'How many times a day should a adult take amoxicillinWhat should I avoid while taking Augmentin?',
//     answer: 'Amoxicillin is usually taken three times a day, but may be given twice a dayAmoxicillin is usually taken three times a day, ',
//   },
//   {
//     id: 2,
//     question: '"What should I avoid while taking Augmentin?"',
//     answer: '"Avoid taking this medicine together with or just after eating a high-fat meal. This will make it harder for your body to absorb the medication. "'


//   },
//   {
//     id: 3,
//     question: 'what is azithromycin? ',
//     answer: 'Azithromycin is a widely used antibiotic sold as Zithromax or Zmax. Azithromycin belongs to the class of drugs known as “macrolide antibiotics,” which work by killing bacteria or preventing their growth. It is administered as an injection, an oral liquid or a tablet. It is popular in its “Z-Pak” form, which is a five-dose treatment rather than the standard 10 doses that most antibiotics require.',
//   },
//   {
//     id: 4,
//     question: 'Who manufactures azithromycin? ',
//     answer: 'Pfizer Inc., one of the world’s largest pharmaceutical companies, manufactures azithromycin as Zithromax or Zmax. Pfizer is headquartered in New York, NY. ',
//   },
//   {
//     id: 5,
//     question: "what's the problem with azithromycin?''",
//     answer: 'Studies show that azithromycin can cause abnormal changes in the electrical activity of the heart that may lead to a potentially fatal irregular heart rhythm, or arrhythmia, which can lead to a heart attack.The New England Journal of Medicine (NEJM) said in May 2012 that their research indicated “a small absolute increase in cardiovascular deaths” in persons treated with a five-day course of azithromycin compared to patients treated with other antibiotics. The FDA issued a “drug safety communication” about azithromycin in March 2013 that cited the NEJM study as well as a study by Pfizer.',
//   },
//   {
//     id: 6,
//     question: 'what is the known side effects of azithromycin?',
//     answer: 'The major concern about azithromycin is its potential to cause changes in the electrical activity of the heart that may lead to arrhythmias, or irregular heart rhythms. This condition can cause sudden cardiovascular death, or a heart attack. Azithromycin is also known to cause QT interval prolongation, or a longer-than-normal time between two specific measurable points in a heartbeat. This, too, can lead to fatal heart problems.',
//   },
//   {
//     id: 7,
//     question: 'has there been a recall of azithromycin? ',
//     answer: 'No. The FDA’s warning about azithromycin states that health care professionals should consider the risk of fatal heart rhythms with azithromycin when determining treatment options for patients who are already at risk for cardiovascular events. It advises patients who have been prescribed Zithromax or Zmax that they should not stop taking azithromycin without talking to their health care professional.		',
//   },
//   {
//     id: 8,
//     question: 'how does FDA action on azithromycin effect me?',
//     answer: 'It’s always important to understand the potentially serious side effects of drugs you have been prescribed, and the FDA’s warning about azithromycin increases your knowledge about this medication. It is also wise to discuss any questions or concerns about azithromycin or other antibacterial drugs with your health care professional.If you are taking Zithromax or Zmax, you should seek medical care immediately if you experience an irregular heartbeat, shortness of breath, dizziness or fainting',
//   },
//   {
//     id: 9,
//     question: 'have there been any azithromycin deaths?',
//     answer: 'The New England Journal of Medicine (NEJM) study of azithromycin cites deaths among users of the drug, but to maintain technical accuracy considers additional factors, such as the prior existence of heart disease among deceased patients in the study.Researchers concluded that azithromycin was associated with an increased risk of cardiovascular death and with death from any cause, with an estimated 47 additional cardiovascular deaths per 1 million courses of azithromycin. In the study’s conclusion, researchers wrote, “During 5 days of azithromycin therapy, there was a small absolute increase in cardiovascular deaths, which was most pronounced among patients with a high baseline risk of cardiovascular disease.”',
//   },
//   {
//     id: 10,
//     question: 'how do i get started with an azithromycin injury claim?',
//     answer: 'If you or a family member of yours has suffered a heart-related injury after taking azithromycin, you should contact a personal injury attorney who has successfully pursued cases on behalf of people injured by dangerous pharmaceuticals and faulty medical devices. Next, you should contact your or your family member’s physician(s) and request copies of all medical records pertaining to the azithromycin prescription in question, the use of the drug and reactions to it.',
//   },
//   {
//     id: 11,
//     question: 'what will it cost to talk to an azithromycin heart risk lawyer about my case?',
//     answer: 'Initial consultations with the azithromycin heart risk lawyers at The Driscoll Firm, LLC, are free and confidential. If The Driscoll Firm, LLC, thinks it can help you with your claim, and you choose to pursue a lawsuit, all legal work on your behalf will be performed on a contingency-fee basis. This means you will not pay any legal fees until we obtain a settlement or a court order that provides compensation for you. Even then, our fee will be based on a nominal percentage of the money obtained in your case.',
//   },
//   // 
//   {
//     id: 12,
//     question: "'Can you take Bactrim DS if you're allergic to penicillin?'",
//     answer: 'Yes, Bactrim DS contains sulfamethoxazole and trimethoprim. It is in no way related to Penicillin. It is safe to take if you are allergic to Penicillin.',
//   },
//   {
//     id: 13,
//     question: '"What is the best antibiotic to treat strep throat?"',
//     answer: "'Penicillin, or drugs from the penicillin-type class, such as amoxicillin, are usually first-line choices for strep throat. Cephalosporin antibiotics such as cephalexin may also be used.'",
//   },
//   {
//     id: 14,
//     question: '"What are Cleocin side effects?"',
//     answer: '"Hives, difficult breathing, swelling in your face or a severe skin reaction fever, sore throat, burning in your eyes, skin pain, red or purple skin rash that spreads and causes blistering and peeling."',
//   },
//   {
//     id: 15,
//     question: 'What are the most common side effects of Clindamycin?',
//     answer: 'Common side effects include diarrhea, nausea, and vomiting. If your diarrhea symptoms don’t improve in a few days or if it gets worse, make sure to contact your doctor right away.',
//   },
//   {
//     id: 16,
//     question: '"What is the best antibiotic to treat a sinus infection?" ',
//     answer: '"In patients who have severe allergy to penicillin-type drugs, doxycycline is best for sinus."',
//   },
//   {
//     id: 17,
//     question: 'What time of day should I take Dulcolax® Tablets?',
//     answer: 'It is recommended that you take Dulcolax® Tablets when you can allow 6 to 12 hours for the product to work. You may find that it is most convenient to take the product about 30 to 60 minutes before your normal bedtime in order to produce a bowel movement in the morning.',
//   },
//   {
//     id: 18,
//     question: 'Is it safe to use Dulcolax® Tablets on a daily basis?',
//     answer: 'Dulcolax® is recommended for short term use only. If symptoms persist seek medical advice.',
//   },
//   {
//     id: 19,
//     question: 'How many Dulcolax® Tablets can I take?',
//     answer: 'Adults and children over 10 years of age can take 1 to 2 tablets in a single daily dose. It is suggested to take the tablets within 30 to 60 minutes before your normal bedtime to produce a bowel movement the next morning. Children 6-10 years can take one tablet at night. Children under 6 years are not recommended to use Dulcolax® Tablets. Please refer to the Dulcolax® Tablets dosage information on the carton or enclosed leaflet for advice on taking Dulcolax® Tablets. See medical advice for use in children.',
//   },
//   {
//     id: 20,
//     question: 'How do I use Dulcolax® Tablets? Can I chew or crush them?',
//     answer: 'Dulcolax® Tablets can be taken with water, but should be swallowed whole. The tablets must not be chewed or crushed. They are small and can be easily swallowed. Do not take Dulcolax® Tablets within 1 hour of consuming dairy products or antacids.',
//   },
//   {
//     id: 21,
//     question: 'Should I take the Dulcolax® Tablets before, after, or with meals?',
//     answer: 'Dulcolax® Tablets can generally be taken at any time except within one hour of consuming dairy products or antacids. Dulcolax® tablets have a special enteric coating, which protects the tablet from the stomach’s acidic environment and ensures it is released in the small intestine (bowel) where it is needed most. ',
//   },
//   {
//     id: 22,
//     question: 'How do Dulcolax® Tablets work?',
//     answer: 'Dulcolax® Tablets are designed to stimulate the bowel and help form soft stools. The tablets are coated to prevent the active ingredient from being released until it reaches the part of the intestines (bowel) where it is needed to work.',
//   },
//   {
//     id: 23,
//     question: 'Can I take Dulcolax® Tablets with milk or dairy products?',
//     answer: 'No. This product should not be taken with milk or dairy products. Do not take Dulcolax® Tablets within one hour of taking indigestion remedies (antacids) or dairy products such as milk or yoghurt as these could cause the tablet’s comfort (enteric) coating to dissolve before it reaches the bowel which may result in vomiting or cramping.For additional questions regarding usage, side effects, or storage instructions, please refer to the Dulcolax® Tablets carton label or consumer medicine information leaflet in the carton, or contact your healthcare professional.',
//   },
//   {
//     id: 24,
//     question: 'What time of day should I take Dulcolax® SP Drops?',
//     answer: 'It is recommended that you take Dulcolax® SP Drops when you can allow 6 to 12 hours for the product to work. You may find that it is most convenient to take the product about 30 to 60 minutes before your normal bedtime in order to produce a bowel movement in the morning.',
//   },
//   {
//     id: 25,
//     question: 'Does Dulcolax® SP Drops contain sugar?',
//     answer: 'Dulcolax® SP Drops are sugar free.',
//   },
//   {
//     id: 26,
//     question: 'How do I take Dulcolax® SP Drops?',
//     answer: 'Follow the directions for use on the carton. Dulcolax® SP Drops can be dripped onto a spoon and should then be taken immediately.Dulcolax® SP Drops can be added to a glass of water, fruit juice or another drink. Drink the entire contents of the glass immediately after Dulcolax® SP Drops have been added.',
//   },
//   {
//     id: 27,
//     question: 'Does Dulcolax® SP Drops come with a measuring cup?',
//     answer: 'Dulcolax® SP Drops is available in a dropper bottle therefore a measuring cup is not required. The required dose can be administered by simply holding the bottle with the dropper facing downwards and gently squeezing the bottle.',
//   },
//   {
//     id: 28,
//     question: 'Do you need to mix Dulcolax® SP Drops before taking it? ',
//     answer: 'Dulcolax® SP Drops can be dripped onto a spoon and then taken immediately.',
//   },
//   {
//     id: 29,
//     question: 'Can you mix Dulcolax® SP Drops with juice? ',
//     answer: 'Dulcolax® SP Drops can be mixed with juice, water or another drink. Drink the entire contents of the glass immediately after Dulcolax SP Drops have been added. Because Dulcolax® SP Drops are tasteless and odourless, it will not change the flavour of the drink.',
//   },
//   {
//     id: 30,
//     question: 'Can children be given Dulcolax® SP Drops?',
//     answer: 'Dulcolax® SP Drops can be given to children from 4 years of age. Children from 4 -10 years, administer 5 to 10 drops at night. Children 10 years and over, initially administer 10 drops at night. This dose can be increased to 20 drops only if required.',
//   },
//   {
//     id: 31,
//     question: 'Do you need to store Dulcolax® SP Drops in the refrigerator?',
//     answer: 'Dulcolax® SP Drops does not need to be stored in the refrigerator but in a cool dry place where the temperature is below 25°C.',
//   },
//   {
//     id: 32,
//     question: 'What other drugs will affect Flagyl?',
//     answer: '"busulfan;lithium; or a blood thinner - warfarin, Coumadin, Jantoven." ',
//   },
//   {
//     id: 33,
//     question: 'How should I take Levaquin?',
//     answer: '"Take this medicine with water, at the same time each day. Drink extra fluids to keep your kidneys working properly while taking this medicine."',
//   },
//   {
//     id: 34,
//     question: 'Can I drink alcohol while taking sulfamethoxazole',
//     answer: '"No, you should not drink alcohol while taking sulfamethoxazole / trimethoprim tablets, or else you may experience unpleasant side effects such as fast heartbeats, warmth or redness under your skin, tingly feeling, nausea, and vomiting."',
//   },
//   {
//     id: 35,
//     question: '"What antibiotics kill Covid-19 (coronavirus)? "',
//     answer: 'Azithromycin (Zithromax) is a macrolide antibiotic that is being investigated as a potential treatment for people with COVID-19, the disease caused by the new coronavirus (SARS-CoV-2). It is already used for the treatment of community-acquired pneumonia caused by designated, susceptible bacteria, and for the treatment of other bacterial infections.',
//   },


// ];

// const Item = ({ item }) => (




//   <View style={{}}>
//     <View style={styles.card}>




//       <Text style={{
//         // fontFamily: 'open-sans-bold',
//         fontWeight: 'bold',

//         fontSize: 20,

//         color: 'white',
//         marginLeft: 15,
//         marginTop: 5
//       }}>{item.question}</Text>

//     </View >

//     <ScrollView style={styles.card2}>
//       <Text style={styles.answer}>{item.answer}</Text>
//     </ScrollView>

//   </View >






// );






// const FaqScreen = () => {
//   const renderItem = ({ item }) => (
//     <Item item={item} />
//   );

//   return (
//     <SafeAreaView style={styles.container}>
//       <FlatList
//         data={DATA}
//         renderItem={renderItem}
//         keyExtractor={item => item.id}
//       />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",

//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: '#f9c2ff',
//     padding: 20,
//     marginVertical: 0,
//     marginHorizontal: 16,
//   },
//   title: {
//     fontSize: 32,
//   },

//   card: {
//     justifyContent: 'center',


//     width: Dimensions.get('window').width - 5,
//     height: Dimensions.get('window').height / 10,
//     backgroundColor: "#00008b",
//     borderTopLeftRadius: 30,
//     borderTopRightRadius: 0,
//     marginLeft: 0,
//     marginBottom: 0,
//     marginRight: 0,


//   },

//   card2: {

//     width: Dimensions.get('window').width - 5,
//     height: Dimensions.get('window').height / 3,

//     backgroundColor: '#6495ed',
//     borderBottomRightRadius: 10,
//     borderBottomRightRadius: 10,
//     marginTop: 0,
//     marginBottom: 8,
//     marginLeft: 0,
//     marginRight: 0,
//     shadowColor: '#000000',
//     shadowOffset: {
//       width: 0,
//       height: 3
//     },
//     shadowRadius: 5,
//     shadowOpacity: 1.0


//   },




//   answer: {

//     fontSize: 20,
//     color: 'white',
//     // lineheight: 2,
//     // fontFamily: "open-sans-bold",
//     marginLeft: 15,
//     marginTop: 6,



//   }



// });

// export default FaqScreen;

// FaqScreen.navigationOptions = {
//   title: 'FAQ',

//   headerStyle: {
//     backgroundColor: ' white',
//   },
//   headerTintColor: 'orange',



// };





// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   developmentModeText: {
//     marginBottom: 20,
//     color: 'rgba(0,0,0,0.4)',
//     fontSize: 14,
//     lineHeight: 19,
//     textAlign: 'center',
//   },
//   contentContainer: {
//     paddingTop: 30,
//   },
//   welcomeContainer: {
//     alignItems: 'center',
//     marginTop: 10,
//     marginBottom: 20,
//   },
//   welcomeImage: {
//     width: 100,
//     height: 80,
//     resizeMode: 'contain',
//     marginTop: 3,
//     marginLeft: -10,
//   },
//   getStartedContainer: {
//     alignItems: 'center',
//     marginHorizontal: 50,
//   },
//   homeScreenFilename: {
//     marginVertical: 7,
//   },
//   codeHighlightText: {
//     color: 'rgba(96,100,109, 0.8)',
//   },
//   codeHighlightContainer: {
//     backgroundColor: 'rgba(0,0,0,0.05)',
//     borderRadius: 3,
//     paddingHorizontal: 4,
//   },
//   getStartedText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     lineHeight: 24,
//     textAlign: 'center',
//   },
//   tabBarInfoContainer: {
//     position: 'absolute',
//     bottom: 0,
//     left: 0,
//     right: 0,
//     ...Platform.select({
//       ios: {
//         shadowColor: 'black',
//         shadowOffset: { width: 0, height: -3 },
//         shadowOpacity: 0.1,
//         shadowRadius: 3,
//       },
//       android: {
//         elevation: 20,
//       },
//     }),
//     alignItems: 'center',
//     backgroundColor: '#fbfbfb',
//     paddingVertical: 20,
//   },
//   tabBarInfoText: {
//     fontSize: 17,
//     color: 'rgba(96,100,109, 1)',
//     textAlign: 'center',
//     fontFamily: 'open-sans-bold',
//     margin: 10
//   },
//   navigationFilename: {
//     marginTop: 5,
//   },
//   helpContainer: {
//     marginTop: 15,
//     alignItems: 'center',
//   },
//   helpLink: {
//     paddingVertical: 15,
//   },
//   helpLinkText: {
//     fontSize: 14,
//     color: '#2e78b7',
//   },
// });
