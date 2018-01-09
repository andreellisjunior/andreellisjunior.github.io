function solve() {

  let problem = document.getElementById('problem').value;

  let userInput = problem.toUpperCase();

  if (userInput == "") {
    alert("Please Enter A One Word Struggle.");
    document.getElementById('result').innerHTML = "";
    document.getElementById('problem').style.borderColor = "red";
    return false;
  } else if (!isNaN(userInput)) {
    alert("Can't Use Numbers. Please Enter A One Word Struggle.");
    document.getElementById("problem").style.borderColor = "red";
    document.getElementById('result').innerHTML = "";
    return false;

  } else {
    switch (userInput) {
      case "ABORTION":
        document.getElementById('result').innerHTML = "<strong><i>Psalm 139:13-16</i></strong><br /><br/> For you formed my inward parts; you knitted me together in my mother's womb. I praise you, for I am fearfully and wonderfully made. Wonderful are your works; my soul knows it very well. My frame was not hidden from you, when I was being made in secret, intricately woven in thedepths of the earth. Your eyes saw my unformed substance; in your book were written, every one of them, the days that were formed for me, when as yet there was none of them.";
        break;
      case "ADDICTION":
        document.getElementById('result').innerHTML = "<strong><i>John 8:34-36</i></strong><br/><br/>34 Jesus replied, “Very truly I tell you, everyone who sins is a slave to sin. 35 Now a slave has no permanent place in the family, but a son belongs to it forever. 36 So if the Son sets you free, you will be free indeed.<br/><br/><strong><i>James 1:13-15</i></strong><br/><br/>13 When tempted, no one should say, “God is tempting me.” For God cannot be tempted by evil, nor does he tempt anyone; 14 but each person is tempted when they are dragged away by their own evil desire and enticed. 15 Then, after desire has conceived, it gives birth to sin; and sin, when it is full-grown, gives birth to death.<br/><br/><strong></i>Prov. 14:12</i></strong><br/><br/>12 There is a way that appears to be right, but in the end it leads to death.";
        break;
      case "ADULTERY":
        document.getElementById('result').innerHTML = "<strong><i>Matthew 5:27, 28, 31, 32</i></strong><br/><br/>27 “You have heard that it was said, ‘You shall not commit adultery.’ 28 But I tell you that anyone who looks at a woman lustfully has already committed adultery with her in his heart. 31 “It has been said, ‘Anyone who divorces his wife must give her a certificate of divorce.’ 32 But I tell you that anyone who divorces his wife, except for sexual immorality, makes her the victim of adultery, and anyone who marries a divorced woman commits adultery.";
        break;
      case "ADVERSITY":
        document.getElementById('result').innerHTML = "<strong><i>Phil. 4:6-7</i></strong><br/><br/>6 Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. 7 And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.<br/><br/><strong><i>1 Peter 1:6, 7</i></strong><br/><br/>6 In all this you greatly rejoice, though now for a little while you may have had to suffer grief in all kinds of trials. 7 These have come so that the proven genuineness of your faith—of greater worth than gold, which perishes even though refined by fire—may result in praise, glory and honor when Jesus Christ is revealed.";
        break;
      case "ANGER":
        document.getElementById('result').innerHTML = "<strong><i>Romans 12:17, 18, 21</i></strong><br/><br/>17 Do not repay anyone evil for evil. Be careful to do what is right in the eyes of everyone. 18 If it is possible, as far as it depends on you, live at peace with everyone. 21 Do not be overcome by evil, but overcome evil with good.<br/><br/><strong><i>Eph. 4:26</i></strong><br/><br/>26 “In your anger do not sin”: Do not let the sun go down while you are still angry,<br/><br/><strong><i>Prov. 15:1</i></strong><br/><br/>15 A gentle answer turns away wrath, but a harsh word stirs up anger.<br/><br/><strong><i>Prov. !9:11</i></strong><br/><br/>11 A person’s wisdom yields patience; it is to one’s glory to overlook an offense.";
        break;
      case "ANXIETY":
        document.getElementById('result').innerHTML = "<strong><i>Matthew 6:25, 31, 33</i></strong><br/><br/>25 “Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes? 31 So do not worry, saying, ‘What shall we eat?’ or ‘What shall we drink?’ or ‘What shall we wear?’ 33 But seek first his kingdom and his righteousness, and all these things will be given to you as well.";
        break;
      case "BITTERNESS":
        document.getElementById('result').innerHTML = "<strong><i>Colossians 3:19</i></strong><br/><br/>19 Husbands, love your wives and do not be harsh with them.<br/><br/><strong><i>Hebrews 12:14-15</i></strong><br/><br/>14 Make every effort to live in peace with everyone and to be holy; without holiness no one will see the Lord. 15 See to it that no one falls short of the grace of God and that no bitter root grows up to cause trouble and defile many.";
        break;
      case "CHEATING":
        document.getElementById('result').innerHTML = "<strong><i>Prov. 13:4</i></strong><br/><br/>4 A sluggard’s appetite is never filled, but the desires of the diligent are fully satisfied.";
        break;
      case "DEATH":
        document.getElementById('result').innerHTML = "<strong><i>1 Thessalonians 4:13-14</i></strong><br/><br/>13 Brothers and sisters, we do not want you to be uninformed about those who sleep in death, so that you do not grieve like the rest of mankind, who have no hope. 14 For we believe that Jesus died and rose again, and so we believe that God will bring with Jesus those who have fallen asleep in him.<br/><br/><strong><i>Revelation 21:4</i></strong><br/><br/>4 ‘He will wipe every tear from their eyes. There will be no more death’[a] or mourning or crying or pain, for the old order of things has passed away.”";
        break;
      case "DEPRESSION":
        document.getElementById('result').innerHTML = "<strong><i>Psalm 3:3-5</i></strong><br/><br/>3 But you, Lord, are a shield around me, my glory, the One who lifts my head high. 4 I call out to the Lord, and he answers me from his holy mountain. 5 I lie down and sleep; I wake again, because the Lord sustains me.<br/><br/><strong><i>Psalm 30:5</i></strong><br/><br/>5 For his anger lasts only a moment, but his favor lasts a lifetime; weeping may stay for the night, but rejoicing comes in the morning.<br/><br/><strong><i>Psalm 40:1-2</i></strong><br/><br/>1 I waited patiently for the Lord; he turned to me and heard my cry. 2 He lifted me out of the slimy pit, out of the mud and mire; he set my feet on a rock and gave me a firm place to stand.<br/><br/><strong><i>Psalm 42:11</i></strong><br/><br/>11 Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.<br/><br/><strong><i>Psalm 147:3</i></strong><br/><br/>3 He heals the brokenhearted and binds up their wounds.";
        break;
      case "DISHONESTY":
        document.getElementById('result').innerHTML = "<strong><i>Matthew 7:2</i></strong><br/><br/>2 For in the same way you judge others, you will be judged, and with the measure you use, it will be measured to you.";
        break;
      case "DOUBT":
        document.getElementById('result').innerHTML = "<strong><i>Matthew 21:21</i></strong><br/><br/>21 Jesus replied, “Truly I tell you, if you have faith and do not doubt, not only can you do what was done to the fig tree, but also you can say to this mountain, ‘Go, throw yourself into the sea,’ and it will be done.<br/><br/><strong><i>James 1:6</i></strong><br/><br/>6 But when you ask, you must believe and not doubt, because the one who doubts is like a wave of the sea, blown and tossed by the wind.";
        break;
      case "DRUNKENNESS":
        document.getElementById('result').innerHTML = "<strong><i>Romans 13:13</i></strong><br/><br/>13 Let us behave decently, as in the daytime, not in carousing and drunkenness, not in sexual immorality and debauchery, not in dissension and jealousy.<br/><br/><strong><i>1 Corinthians 5:11</i></strong><br/><br/>11 But now I am writing to you that you must not associate with anyone who claims to be a brother or sister[a] but is sexually immoral or greedy, an idolater or slanderer, a drunkard or swindler. Do not even eat with such people.<br/><br/><strong><i>Eph. 5:18</i></strong><br/><br/>18 Do not get drunk on wine, which leads to debauchery. Instead, be filled with the Spirit,";
        break;
      case "FEAR":
        document.getElementById('result').innerHTML = "<strong><i>2 Timothy 1:7</i></strong><br/><br/>7 For the Spirit God gave us does not make us timid, but gives us power, love and self-discipline.<br/><br/><strong><i>Psalm 31:24</i></strong><br/><br/>24 Be strong and take heart, all you who hope in the Lord.<br/><br/><strong><i>Psalm 91:10</i></strong><br/><br/>10 no harm will overtake you, no disaster will come near your tent.<br/><br/><strong><i>Psalm 121:1-2</i></strong><br/><br/>1 I lift up my eyes to the mountains—where does my help come from? 2 My help comes from the Lord, the Maker of heaven and earth.";
        break;
      case "GOSSIP":
        document.getElementById('result').innerHTML = "<strong><i>Matthew 12:36</i></strong><br/><br/>36 But I tell you that everyone will have to give account on the day of judgment for every empty word they have spoken.<br/><br/><strong><i>Ephesians 4:29</i></strong><br/><br/>29 Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen.<br/><br/><strong><i>James 3:1-2</i></strong><br/><br/>3 Not many of you should become teachers, my fellow believers, because you know that we who teach will be judged more strictly. 2 We all stumble in many ways. Anyone who is never at fault in what they say is perfect, able to keep their whole body in check.<br/><br/><strong><i>1 Peter 4:15</i></strong><br/><br/>15 If you suffer, it should not be as a murderer or thief or any other kind of criminal, or even as a meddler.<br/><br/><strong><i>Psalm 19:14</i></strong><br/><br/>14 May these words of my mouth and this meditation of my heart be pleasing in your sight, Lord, my Rock and my Redeemer.<br/><br/><strong><i>Psalm 101:5</i></strong><br/><br/>Whoever slanders their neighbor in secret, I will put to silence; whoever has haughty eyes and a proud heart, I will not tolerate.<br/><br/><strong><i>Psalm 141:3</i></strong><br/><br/>3 Set a guard over my mouth, Lord; keep watch over the door of my lips.<br/><br/><strong><i>Proverbs 20:19</i></strong><br/><br/>19 A gossip betrays a confidence; so avoid anyone who talks too much.";
        break;
      case "GREED":
        document.getElementById('result').innerHTML = "<strong><i>Matthew 6:19-21</i></strong><br/><br/>19 “Do not store up for yourselves treasures on earth, where moths and vermin destroy, and where thieves break in and steal. 20 But store up for yourselves treasures in heaven, where moths and vermin do not destroy, and where thieves do not break in and steal. 21 For where your treasure is, there your heart will be also.<br/><br/><strong><i>Luke 12:15, 34</i></strong><br/><br/>15 Then he said to them, “Watch out! Be on your guard against all kinds of greed; life does not consist in an abundance of possessions.” 34 For where your treasure is, there your heart will be also.<br/><br/><strong><i>1 Timothy 6:10</i></strong><br/><br/>10 For the love of money is a root of all kinds of evil. Some people, eager for money, have wandered from the faith and pierced themselves with many griefs.<br/><br/><strong><i>Proverbs 11:24-25</i></strong><br/><br/>4 One person gives freely, yet gains even more; another withholds unduly, but comes to poverty. 25 A generous person will prosper; whoever refreshes others will be refreshed.<br/><br/><strong><i>Proverbs 15:27</i></strong><br/><br/>27 The greedy bring ruin to their households, but the one who hates bribes will live.<br/><br/><strong><i>Proverbs 23: 4-5</i></strong><br/><br/>4 Do not wear yourself out to get rich; do not trust your own cleverness. 5 Cast but a glance at riches, and they are gone, for they will surely sprout wings and fly off to the sky like an eagle.";
        break;
      case "GUILT":
        document.getElementById('result').innerHTML = "<strong><i>Hebrews 10:17</i></strong><br/><br/>17 Then he adds:“Their sins and lawless acts I will remember no more.”<br/><br/><strong><i>Psalm 32:5</i></strong><br/><br/>5 Then I acknowledged my sin to you and did not cover up my iniquity. I said, “I will confess my transgressions to the Lord.” And you forgave the guilt of my sin.<br/><br/><strong><i>Proverbs 28:13</i></strong><br/><br/>13 Whoever conceals their sins does not prosper, but the one who confesses and renounces them finds mercy.";
        break;
      case "HOPELESSNESS":
        document.getElementById('result').innerHTML = "<strong><i>Hebrews 10:23</i></strong><br/><br/>23 Let us hold unswervingly to the hope we profess, for he who promised is faithful.";
        break;
      case "INSECURITY":
        document.getElementById('result').innerHTML = "<strong><i>John 10:27-28</i></strong><br/><br/>27 My sheep listen to my voice; I know them, and they follow me. 28 I give them eternal life, and they shall never perish; no one will snatch them out of my hand.";
        break;
      case "LAZINESS":
        document.getElementById('result').innerHTML = "<strong><i>2 Thessalonians 3:10-13</i></strong><br/><br/> 10 For even when we were with you, we gave you this rule: “The one who is unwilling to work shall not eat.” 11 We hear that some among you are idle and disruptive. They are not busy; they are busybodies. 12 Such people we command and urge in the Lord Jesus Christ to settle down and earn the food they eat. 13 And as for you, brothers and sisters, never tire of doing what is good.<br/><br/><strong><i>Proverbs 6:6-11</i></strong><br/><br/>6 Go to the ant, you sluggard; consider its ways and be wise! 7 It has no commander, no overseer or ruler, 8 yet it stores its provisions in summer and gathers its food at harvest. 9 How long will you lie there, you sluggard? When will you get up from your sleep? 10 A little sleep, a little slumber, a little folding of the hands to rest— 11 and poverty will come on you like a thief and scarcity like an armed man.<br/><br/><strong><i>Proverbs 13:4</i></strong><br/><br/>4 A sluggard’s appetite is never filled, but the desires of the diligent are fully satisfied.";
        break;
      case "LUST":
        document.getElementById('result').innerHTML = "<strong><i>1 John 2:15-17</i></strong><br/><br/>15 Do not love the world or anything in the world. If anyone loves the world, love for the Father is not in them. 16 For everything in the world—the lust of the flesh, the lust of the eyes, and the pride of life—comes not from the Father but from the world. 17 The world and its desires pass away, but whoever does the will of God lives forever.";
        break;
      case "LYING":
        document.getElementById('result').innerHTML = "<strong><i>Ephesians 4:25</i></strong><br/><br/>25 Therefore each of you must put off falsehood and speak truthfully to your neighbor, for we are all members of one body.<br/><br/><strong><i>Proverbs 12:19</i></strong><br/><br/>19 Truthful lips endure forever, but a lying tongue lasts only a moment.<br/><br/><strong><i>Proverbs 14:5</i></strong><br/><br/>5 An honest witness does not deceive, but a false witness pours out lies.";
        break;
      case "PEER PRESSURE":
        document.getElementById('result').innerHTML = "<strong><i>1 Corinthians 15:33</i></strong><br/><br/>33 Do not be misled: “Bad company corrupts good character.”<br/><br/><strong><i>Psalm 1:1-2</i></strong><br/><br/>1 Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers, 2 but whose delight is in the law of the Lord, and who meditates on his law day and night.<br/><br/><strong><i>Proverbs 1:10-15</i></strong><br/><br/>10 My son, if sinful men entice you, do not give in to them. 11 If they say, “Come along with us; let’s lie in wait for innocent blood, let’s ambush some harmless soul; 12 let’s swallow them alive, like the grave, and whole, like those who go down to the pit; 13 we will get all sorts of valuable things and fill our houses with plunder; 14 cast lots with us; we will all share the loot”— 15 my son, do not go along with them, do not set foot on their paths;";
        break;
      case "REVENGE":
        document.getElementById('result').innerHTML = "<strong><i>Matthew 5:44</i></strong><br/><br/>44 But I tell you, love your enemies and pray for those who persecute you,<br/><br/><strong><i>1 Thessalonians 5:15</i></strong><br/><br/>15 Make sure that nobody pays back wrong for wrong, but always strive to do what is good for each other and for everyone else.";
        break;
      case "SELF-RIGHTEOUSNESS":
        document.getElementById('result').innerHTML = "<strong><i>Luke 18:11-12</i></strong><br/><br/> 11 The Pharisee stood by himself and prayed: ‘God, I thank you that I am not like other people—robbers, evildoers, adulterers—or even like this tax collector. 12 I fast twice a week and give a tenth of all I get.’";
        break;
      case "SEX":
        document.getElementById('result').innerHTML = "<strong><i>Ephesians 5:3-4</i></strong><br/><br/>3 But among you there must not be even a hint of sexual immorality, or of any kind of impurity, or of greed, because these are improper for God’s holy people. 4 Nor should there be obscenity, foolish talk or coarse joking, which are out of place, but rather thanksgiving.<br/><br/><strong><i>1 Thessalonians 4:3-4</i></strong><br/><br/>3 It is God’s will that you should be sanctified: that you should avoid sexual immorality; 4 that each of you should learn to control your own body[a] in a way that is holy and honorable,<br/><br/><strong><i>2 Timothy 2:22</i></strong><br/><br/>22 Flee the evil desires of youth and pursue righteousness, faith, love and peace, along with those who call on the Lord out of a pure heart.";
        break;
      case "SIN":
        document.getElementById('result').innerHTML = "<strong><i>John 8:34, 36</i></strong><br/><br/>34 Jesus replied, “Very truly I tell you, everyone who sins is a slave to sin. 36 So if the Son sets you free, you will be free indeed.<br/><br/><strong><i>Romans 3:23</i></strong><br/><br/>For all have sinned and fall short of the glory of God,";
        break;
      case "STEALING":
        document.getElementById('result').innerHTML = "<strong><i>Ephesians 4:28</i></strong><br/><br/>28 Anyone who has been stealing must steal no longer, but must work, doing something useful with their own hands, that they may have something to share with those in need.<br/><br/><strong><i>1 Peter 4:15</i></strong><br/><br/>15 If you suffer, it should not be as a murderer or thief or any other kind of criminal, or even as a meddler.<br/><br/><strong><i>Proverbs 29:24</i></strong><br/><br/>24 The accomplices of thieves are their own enemies; they are put under oath and dare not testify.";
        break;
      case "STRESS":
        document.getElementById('result').innerHTML = "<strong><i>Matthew 11:28</i></strong><br/><br/>28 “Come to me, all you who are weary and burdened, and I will give you rest.<br/><br/><strong><i>Philippians 4:11-13</i></strong><br/><br/>11 I am not saying this because I am in need, for I have learned to be content whatever the circumstances. 12 I know what it is to be in need, and I know what it is to have plenty. I have learned the secret of being content in any and every situation, whether well fed or hungry, whether living in plenty or in want. 13 I can do all this through him who gives me strength.<br/><br/><strong><i>Psalm 9:9</i></strong><br/><br/>9 The Lord is a refuge for the oppressed, a stronghold in times of trouble.<br/><br/><strong><i>Psalm 27:5</i></strong><br/><br/>5 For in the day of trouble he will keep me safe in his dwelling; he will hide me in the shelter of his sacred tent and set me high upon a rock.<br/><br/><strong><i>Psalm 34:4</i></strong><br/><br/>4 I sought the Lord, and he answered me; he delivered me from all my fears.<br/><br/><strong><i>Psalm 37:7-8</i></strong><br/><br/>7 Be still before the Lord and wait patiently for him; do not fret when people succeed in their ways, when they carry out their wicked schemes. 8 Refrain from anger and turn from wrath; do not fret—it leads only to evil.<br/><br/><strong><i>Psalm 56:3</i></strong><br/><br/>3 When I am afraid, I put my trust in you.<br/><br/>";
        break;
      case "SUICIDE":
        document.getElementById('result').innerHTML = "<strong><i>Psalm 143:7-11</i></strong><br/><br/>7 Answer me quickly, Lord; my spirit fails. Do not hide your face from me or I will be like those who go down to the pit. 8 Let the morning bring me word of your unfailing love, for I have put my trust in you. Show me the way I should go, for to you I entrust my life. 9 Rescue me from my enemies, Lord, for I hide myself in you. 10 Teach me to do your will, for you are my God; may your good Spirit lead me on level ground 11 For your name’s sake, Lord, preserve my life; in your righteousness, bring me out of trouble.";
        break;
      case "SWEARING":
        document.getElementById('result').innerHTML = "<strong><i>Ephesians 4:29</i></strong><br/><br/>29 Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen.<br/><br/><strong><i>Colossians 3:8</i></strong><br/><br/>8 But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.";
        break;
      case "CURSING":
        document.getElementById('result').innerHTML = "<strong><i>Ephesians 4:29</i></strong><br/><br/>29 Do not let any unwholesome talk come out of your mouths, but only what is helpful for building others up according to their needs, that it may benefit those who listen.<br/><br/><strong><i>Colossians 3:8</i></strong><br/><br/>8 But now you must also rid yourselves of all such things as these: anger, rage, malice, slander, and filthy language from your lips.";
        break;
      case "TEMPTATION":
        document.getElementById('result').innerHTML = "<strong><i>Matthew 26:41</i></strong><br/><br/>41 “Watch and pray so that you will not fall into temptation. The spirit is willing, but the flesh is weak.”<br/><br/><strong><i>1 Corinthians 10:13</i></strong><br/><br/>13 No temptation has overtaken you except what is common to mankind. And God is faithful; he will not let you be tempted beyond what you can bear. But when you are tempted, he will also provide a way out so that you can endure it.<br/><br/><strong><i>James 4:7</i></strong><br/><br/>7 Submit yourselves, then, to God. Resist the devil, and he will flee from you.<br/><br/><strong><i>2 Peter 2:9</i></strong><br/><br/>9 if this is so, then the Lord knows how to rescue the godly from trials and to hold the unrighteous for punishment on the day of judgment.<br/><br/><strong><i>Psalm 119:11</i></strong><br/><br/>11 I have hidden your word in my heart that I might not sin against you.";
        break;
      case "TERROR":
        document.getElementById('result').innerHTML = "<strong><i>Philippians 4:6-7</i></strong><br/><br/> 6 Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. 7 And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.<br/><br/><strong><i>Psalm 37:3-7</i></strong><br/><br/>3 Trust in the Lord and do good; dwell in the land and enjoy safe pasture. 4 Take delight in the Lord, and he will give you the desires of your heart. 5 Commit your way to the Lord; trust in him and he will do this: 6 He will make your righteous reward shine like the dawn, your vindication like the noonday sun. 7 Be still before the Lord and wait patiently for him; do not fret when people succeed in their ways, when they carry out their wicked schemes.";
        break;
        case "WAR":
        document.getElementById('result').innerHTML = "<strong><i>Philippians 4:6-7</i></strong><br/><br/> 6 Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. 7 And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.<br/><br/><strong><i>Psalm 37:3-7</i></strong><br/><br/>3 Trust in the Lord and do good; dwell in the land and enjoy safe pasture. 4 Take delight in the Lord, and he will give you the desires of your heart. 5 Commit your way to the Lord; trust in him and he will do this: 6 He will make your righteous reward shine like the dawn, your vindication like the noonday sun. 7 Be still before the Lord and wait patiently for him; do not fret when people succeed in their ways, when they carry out their wicked schemes.";
        break;
      default:
        document.getElementById('result').innerHTML = "Sorry, you may have misspelled a word, have too many words, or that struggle hasn't been added yet. Please try again with one word and be sure it's spelled correctly. Thank You!";
        break;
    }
    document.getElementById('problem').style.borderColor = "lightgrey";
  }


  return true;
}