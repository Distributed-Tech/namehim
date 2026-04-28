/* ================================================================
   SafeVoice i18n — English & Spanish
   Language detection → localStorage 'sv_lang' → navigator.language
   ================================================================ */

var TRANSLATIONS = {

/* ────────────────────────────────────────────────────────────────
   ENGLISH
──────────────────────────────────────────────────────────────── */
en: {
  /* ── Navigation ── */
  'nav.browse':     'Browse',
  'nav.submit':     'Submit',
  'nav.community':  'Community',
  'nav.resources':  'Resources',
  'nav.about':      'About',
  'nav.lang':       'ES',

  /* ── Disclaimer banners ── */
  'disclaimer.resources': 'Resources listed here are for informational purposes only. If you are in immediate danger, call 911 now.',
  'disclaimer.main':      'All reports are user-submitted and unverified. Not a substitute for law enforcement.',
  'disclaimer.submit':    'All reports are public and permanent. Submit only honest, good-faith reports.',

  /* ── Resources page hero ── */
  'resources.hero.title': 'Resources & Support',
  'resources.hero.desc':  'You are not alone. Whether you\'ve experienced abuse, harassment, or assault — or you\'re supporting someone who has — this is your starting point. Take what you need, in the order that feels right.',

  /* ── Emergency banner ── */
  'emergency.danger':   'Consider calling emergency services now.',
  'emergency.desc':     'Consider calling emergency services now.',
  'emergency.911.num':  '911',
  'emergency.911.lbl':  'US / Canada / Mexico',

  /* ── Tab labels ── */
  'tab.immediate': 'Right Now',
  'tab.hotlines':  'Hotlines',
  'tab.lgbtq':     'LGBTQ+',
  'tab.healing':   'Healing',
  'tab.safety':    'Safety Plan',
  'tab.platform':  'How This Site Works',
  'tab.legal':     'Legal',

  /* ── Right Now pane ── */
  'immediate.title': 'What to Do Right Now',
  'immediate.desc':  'If you\'ve just experienced abuse, assault, or harassment — these steps can protect you and preserve your options. You don\'t have to do everything at once. Check each step as you complete it.',
  'immediate.progress': '0 of 6 steps completed',
  'immediate.reset':    'Reset',
  'immediate.step1.title': 'Get to safety',
  'immediate.step1.desc':  'Leave the situation if you can do so safely. Go somewhere you feel protected — a trusted person\'s home, a public space, or a shelter.',
  'immediate.step2.title': 'Don\'t shower or change clothes (if sexual assault)',
  'immediate.step2.desc':  'Forensic evidence can be collected up to 120 hours after an assault. Preserve your clothes in a paper bag if possible.',
  'immediate.step3.title': 'Seek medical attention',
  'immediate.step3.desc':  'Even if you feel okay, a medical exam can document injuries and preserve evidence without committing to a police report.',
  'immediate.step4.title': 'Tell someone you trust',
  'immediate.step4.desc':  'A friend, family member, or counselor. Saying it out loud to someone who supports you can be the first step toward healing.',
  'immediate.step5.title': 'Document evidence',
  'immediate.step5.desc':  'Save screenshots, messages, photos of injuries. Write down what happened while it\'s fresh. Email copies to yourself or a trusted person for safekeeping.',
  'immediate.step6.title': 'Contact a crisis hotline',
  'immediate.step6.desc':  'Trained advocates can walk you through every next step. You don\'t have to decide anything — just talk to someone who understands.',
  'immediate.done':        'You\'ve completed all six steps. That took real courage. A crisis advocate can help you decide what to do next — see the Hotlines tab. You are not alone.',
  'immediate.notready.title': 'Not ready to take action yet?',
  'immediate.notready.desc':  'That\'s okay. Simply knowing these steps exist is enough for today. This page will be here when you\'re ready. You are not obligated to do anything on anyone else\'s timeline.',

  /* ── Hotlines pane ── */
  'hotlines.title': 'Crisis Hotlines',
  'hotlines.desc':  'Free, confidential, available 24/7. You do not need to be in crisis to call — they are there for any level of distress. Calls do not appear on most phone bills when called from a landline.',
  'hotlines.group.us':    'United States',
  'hotlines.group.lgbtq': 'LGBTQ+ Specific Lines',
  'hotlines.group.ca':    'Canada',
  'hotlines.group.mx':    'México',

  /* ── LGBTQ+ pane ── */
  'lgbtq.title': 'LGBTQ+ Resources & Support',
  'lgbtq.desc':  'Abuse happens in every community. LGBTQ+ survivors face unique barriers — including fear of being outed, discrimination by law enforcement, and difficulty finding affirming services. You deserve support that fully sees and respects who you are.',
  'lgbtq.callout': 'You deserve support regardless of your gender identity, sexual orientation, or relationship structure. Being LGBTQ+ does not make abuse more acceptable — and it does not mean you have to face it alone.',
  'lgbtq.hotlines.note': 'Looking for crisis phone lines? All LGBTQ+ hotlines are also listed on the Hotlines tab →',

  /* ── Healing pane ── */
  'healing.title': 'Healing & Emotional Support',
  'healing.desc':  'Healing from trauma is deeply personal, nonlinear, and takes as long as it takes. There is no right way — and no deadline. Reaching out for support is not weakness; it is one of the bravest things you can do.',
  'healing.callout': 'What happened to you was not your fault. You are allowed to feel everything — anger, grief, numbness, confusion. None of it defines who you are.',

  /* ── Safety Plan pane ── */
  'safety.title': 'Safety Planning',
  'safety.desc':  'A safety plan is a personalized, practical plan for staying safer in an ongoing or potentially dangerous situation. Use the fields below to draft one privately — nothing here is saved or transmitted.',
  'safety.privacy': 'Your privacy: This form exists only in your browser. Nothing typed here is sent anywhere or saved after you close the tab. A domestic violence advocate can also help you build a customized plan — call any hotline on the Hotlines tab.',
  'safety.contacts.label': 'Emergency contacts',
  'safety.contact1': 'Trusted person #1 (name & phone)',
  'safety.contact2': 'Trusted person #2 (name & phone)',
  'safety.code':    'Code word (a phrase that signals you need help)',
  'safety.exit.label': 'Exit strategy',
  'safety.exits':   'Safe exits from your home or workplace',
  'safety.place':   'Where you can go quickly if you need to leave',
  'safety.docs.label': 'Documents & essentials',
  'safety.checklist.prompt': 'Check off what you have accessible or have prepared:',
  'safety.check.id':    'ID / Passport',
  'safety.check.cash':  'Cash or card',
  'safety.check.meds':  'Medications',
  'safety.check.phone': 'Phone charger',
  'safety.check.docs':  'Documents backed up',
  'safety.check.plan':  'Trusted person knows my plan',
  'safety.notes.label': 'Notes',
  'safety.notes':   'Any other details important to your plan',
  'safety.print':   'Print / Save as PDF',
  'safety.clear':   'Clear all fields',
  'safety.contact1.placeholder': 'e.g. Maria — 555-0100',
  'safety.contact2.placeholder': 'e.g. Alex — 555-0200',
  'safety.code.placeholder':     'e.g. "Can you bring me the blue book?"',
  'safety.exits.placeholder':    'e.g. Back door → alley → neighbor\'s house. Fire escape on north side…',
  'safety.place.placeholder':    'e.g. Maria\'s home at 123 Oak St / public library on Main',
  'safety.notes.placeholder':    'Warning signs to watch for, situations to avoid, local shelter address…',

  /* ── How This Site Works pane ── */
  'platform.title': 'How This Site Works',
  'platform.desc':  'SafeVoice is an anonymous, open-source community awareness platform. Here is exactly what happens when you submit, browse, or interact with the platform.',

  /* ── Legal pane ── */
  'legal.title': 'Legal Options',
  'legal.desc':  'You have legal options beyond filing a police report. These protections exist independently of any criminal prosecution. A victim advocacy organization or attorney can help you understand what applies — many services are free.',

  /* ── Footer ── */
  'footer.tagline': 'SafeVoice — Open source community safety',

  /* ── About page ── */
  'about.title':    'About SafeVoice',
  'about.what.h':   'What this is',
  'about.name.h':   'About the original name and mission',
  'about.use.h':    'How to use this information',
  'about.legal.h':  'Legal & safety notice',
  'about.oss.h':    'Open source & transparency',
  'about.privacy.h':'Privacy & data collection',
  'about.build.h':  'Build your own',
  'about.why.h':    'Why this exists',

  /* ── Index page key UI ── */
  'index.search.placeholder': 'Search by name, city, or category…',
  'index.submit.btn':   'Submit Report',
  'index.browse.title': 'Browse Reports',
  'index.submit.title': 'Submit a Report',
  'index.community.title': 'Community',

  /* ── Community Rooms ── */
  'community.hero.title': 'Community Voices',
  'community.hero.desc':  'A moderated space for survivors, allies, and supporters — anonymous, intersectional, and built on solidarity. Choose a room below, or read and react to what others have shared.',
  'community.exit.btn':   'Exit quickly',
  'community.exit.title': 'Quick exit: leaves this page immediately',

  'community.room.stories':   'Survivor Stories',
  'community.room.hope':      'Messages of Hope',
  'community.room.ask':       'Ask the Community',
  'community.room.lgbtq':     'LGBTQ+ Voices',
  'community.room.trans':     'Trans & Non-Binary',
  'community.room.allies':    'For Allies',
  'community.room.legal':     'Court & Legal',
  'community.room.resources': 'Resource Recs',
  'community.room.men':       'Men Who\'ve Experienced Abuse',

  'community.room.stories.desc':   'Long-form personal accounts. Share what happened, where you are now, or anything in between. All stories are anonymous and moderated.',
  'community.room.hope.desc':      'Short messages of hope, encouragement, and solidarity. No trauma required — just warmth and light for people who need it.',
  'community.room.ask.desc':       'Post an anonymous question. The community replies. Nothing is too small or too overwhelming to ask here.',
  'community.room.lgbtq.desc':     'An affinity space for LGBTQ+ survivors and allies. LGBTQ+ folks face unique barriers — this room is explicitly for those experiences.',
  'community.room.trans.desc':     'Space specifically for trans and non-binary survivors. Trans people are disproportionately targeted for abuse — you belong here and your experiences are valid.',
  'community.room.allies.desc':    'Written by survivors, for the people who love them. How to help, what not to say, how to show up without taking over.',
  'community.room.legal.desc':     'Survivor-to-survivor knowledge about navigating legal systems. Not legal advice — lived experience. Always consult a qualified advocate.',
  'community.room.resources.desc': 'Community-curated links to hotlines, shelters, books, podcasts, and tools. If something helped you, share it.',
  'community.room.men.desc':       'Abuse affects people of all genders. This room is a welcoming, non-judgmental space for men and masculine-of-center survivors.',

  /* ── Community Composer ── */
  'community.compose.btn':           'Share your voice',
  'community.compose.step1.title':   'Choose a room',
  'community.compose.step1.desc':    'Where does your post belong? Pick the space that fits best.',
  'community.compose.step2.title':   'Content note',
  'community.compose.step2.desc':    'Does your post describe violence, sexual assault, or coercive control? A content note lets readers choose when they\'re ready.',
  'community.compose.step3.title':   'Write your post',
  'community.compose.step3.desc':    'Share in your own words. No names, no identifying details about yourself or others.',
  'community.compose.step4.title':   'Preview',
  'community.compose.step4.desc':    'This is how your post will appear. Ready to submit?',
  'community.compose.step5.title':   'Verification',
  'community.compose.next':          'Continue →',
  'community.compose.back':          '← Back',
  'community.compose.submit':        'Submit',
  'community.compose.tags.label':    'Add tags (optional)',
  'community.compose.title.label':   'Title (optional)',
  'community.compose.content.label': 'Your post *',
  'community.compose.content.placeholder': 'Share your experience, question, or message… (no names or identifying details)',
  'community.compose.draft.saved':   'Draft saved',
  'community.compose.draft.restore': 'You have a saved draft. Restore it?',
  'community.compose.pii.warning':   'Your post may contain personal information (name, contact, or location). Please review before submitting — for your own protection.',
  'community.compose.crisis.overlay.title':  'We see you. You\'re not alone.',
  'community.compose.crisis.overlay.desc':   'Your words suggest you may be going through something very hard right now. Before you post, please know that real, confidential support is available right now — 24/7, free, and anonymous.',
  'community.compose.crisis.hotline':        'National Crisis Line',
  'community.compose.crisis.chat':           'Crisis Text Line — text HOME to 741741',
  'community.compose.crisis.continue':       'Continue writing anyway',
  'community.compose.success.title':         'Thank you for sharing your voice.',
  'community.compose.success.desc':          'Your post has been submitted for review. It usually takes 24–48 hours to appear. While you wait, you might find comfort in reading what others have shared.',
  'community.compose.success.read':          'Read other stories',
  'community.compose.success.resources':     'Find support resources',

  /* ── CW labels ── */
  'community.cw.none':             'No content note needed',
  'community.cw.physical':         'Physical violence',
  'community.cw.sexual':           'Sexual violence or assault',
  'community.cw.coercive-control': 'Coercive control or emotional abuse',
  'community.cw.general':          'General — I\'ll describe in my post',
  'community.cw.reveal':           'Show post',
  'community.cw.collapse':         'Collapse',
  'community.cw.badge.physical':   'CW: Physical violence',
  'community.cw.badge.sexual':     'CW: Sexual violence',
  'community.cw.badge.coercive-control': 'CW: Coercive control',
  'community.cw.badge.general':    'CW: Content note',

  /* ── Tags ── */
  'community.tag.healing':    'healing',
  'community.tag.leaving':    'leaving',
  'community.tag.court':      'court',
  'community.tag.family':     'family',
  'community.tag.lgbtq':      'LGBTQ+',
  'community.tag.recovery':   'recovery',
  'community.tag.first-week': 'first week',
  'community.tag.years-later':'years later',
  'community.tag.housing':    'housing',
  'community.tag.children':   'children',
  'community.tag.financial':  'financial abuse',
  'community.tag.digital':    'digital safety',
  'community.tag.hope':       'hope',
  'community.tag.letter':     'letter to myself',

  /* ── Sort & Filter ── */
  'community.sort.label':     'Sort',
  'community.sort.newest':    'Newest',
  'community.sort.supported': 'Most supported',
  'community.sort.random':    'Random',
  'community.sort.unanswered':'Unanswered',
  'community.filter.tags':    'Filter by tag',
  'community.filter.lang':    'Language',
  'community.filter.all':     'All',
  'community.filter.clear':   'Clear filters',
  'community.search.placeholder': 'Search posts…',

  /* ── Reactions ── */
  'community.reaction.hear_you':   'I hear you',
  'community.reaction.gave_hope':  'Gave me hope',
  'community.reaction.solidarity': 'Solidarity',
  'community.reaction.me_too':     'Me too',

  /* ── Replies ── */
  'community.replies.show':      'Show replies',
  'community.replies.hide':      'Hide replies',
  'community.replies.count':     '{n} replies',
  'community.replies.count.1':   '1 reply',
  'community.replies.none':      'No replies yet. Be the first to respond.',
  'community.replies.write':     'Write a reply…',
  'community.replies.submit':    'Post reply',
  'community.replies.you':       'You (OP)',
  'community.replies.author':    'Reply {n}',
  'community.replies.loading':   'Loading replies…',
  'community.replies.moderation':'Replies are reviewed before appearing.',

  /* ── Story actions ── */
  'community.story.flag':   'Report this post',
  'community.story.share':  'Share link',
  'community.story.listen': 'Listen',
  'community.story.saved':  'Saved',
  'community.story.save':   'Save',
  'community.story.back':   '← Back to all posts',

  /* ── Story flag modal ── */
  'community.flag.title':       'Report this post',
  'community.flag.desc':        'All flags are reviewed by a moderator. Thank you for helping keep this space safe.',
  'community.flag.names-a-person': 'Names or identifies a specific person',
  'community.flag.unsafe-content': 'Unsafe or harmful content',
  'community.flag.spam':           'Spam or off-topic',
  'community.flag.crisis-needs-help': 'This person may need crisis support',
  'community.flag.other':          'Other',
  'community.flag.submit':      'Submit flag',
  'community.flag.thanks':      'Thank you. A moderator will review this post.',

  /* ── Saved posts ── */
  'community.saved.tab':    'Saved',
  'community.saved.empty':  'No saved posts yet. Tap the bookmark icon on any post to save it here — just for you, never shared.',
  'community.saved.note':   'Saved posts are stored only in your browser. They disappear if you clear your browser data.',

  /* ── Moderation / loading ── */
  'community.loading':         'Loading…',
  'community.empty':           'No posts here yet. Be the first to share.',
  'community.load.more':       'Load more',
  'community.moderation.note': 'Posts are reviewed before appearing — usually within 24–48 hours.',
  'community.mod.info.title':  'How moderation works',
  'community.mod.info.desc':   'All Community posts are reviewed by a volunteer moderator before appearing publicly. We remove posts that name specific individuals, contain unsafe content, or violate our community guidelines. Moderation is about safety, not censorship — we never remove posts simply because a topic is difficult.',

  /* ── Story of the day (homepage widget) ── */
  'community.sotd.heading': 'From the Community',
  'community.sotd.label':   'Community Voice',
  'community.sotd.cta':     'Read more voices →',

  /* ── Report flow ── */
  'flow.step1.label': 'Before you start',
  'flow.step2.label': 'What happened',
  'flow.step3.label': 'About the person',
  'flow.step4.label': 'Your experience',
  'flow.step5.label': 'Review & submit',

  /* ── Browse section UI ── */
  'browse.desc':            'Search community-submitted safety reports by name or location. See someone you recognize? Trust your instincts — do your own research, and share what you know using the Submit tab.',
  'browse.source.label':    'Source',
  'browse.our-reports':     'Our Reports',
  'browse.search.label':    'Search',
  'browse.filter.label':    'Filter',
  'browse.clear':           'Clear',
  'browse.all-countries':   'All countries',
  'browse.all-states':      'All states',
  'browse.map':             'Map View',
  'browse.back':            '← Back to all reports',
  'browse.th.name':         'Name',
  'browse.th.location':     'Location',
  'browse.th.categories':   'Categories',
  'browse.th.actions':      'Actions',
  'browse.counting':        'Loading reports and counting…',
  'browse.count':           'reports and counting…',
  'browse.loaded':          'Loaded {total} report(s). Showing up to {per} per page.',
  'browse.showing':         'Showing {n} of {total} report(s), {per} per page.',
  'browse.none-yet':        'No reports yet. Be the first to submit.',
  'browse.no-match':        'No matching reports found.',
  'browse.report-entry':    'Report this entry',
  'browse.share':           'Share',
  'browse.shared-single':   'Showing shared report #{id}.',
  'browse.not-found':       'Report not found.',
  'browse.not-found-link':  'Report not found. <a href="#/browse">Back to all reports</a>.',
  'browse.copied':          'Link copied to clipboard',
  'browse.copy-failed':     'Could not copy link',
  'browse.page.first':      'First',
  'browse.page.prev':       'Previous',
  'browse.page.next':       'Next',
  'browse.page.last':       'Last',
  'browse.state-label':     'State / Province (optional)',
  'browse.state-select':    'Select a state (optional)',
  'browse.state-placeholder': 'State / Province (optional)',

  /* ── Submit section UI ── */
  'submit.desc':             'Share a safety concern with the community. All reports are public and permanent. Please submit only honest, good-faith reports.',
  'submit.guided':           'Try the guided report flow',
  'submit.guided.note':      '— step-by-step, easier for first-time submissions',
  'submit.section.person':   'About the person',
  'submit.section.type':     'Type of concern',
  'submit.section.verify':   'Verification',
  'submit.name.label':       'Full Name *',
  'submit.name.placeholder': 'First and last name',
  'submit.city.label':       'City *',
  'submit.city.placeholder': 'City where they reside or incident occurred',
  'submit.country.label':    'Country *',
  'submit.country.default':  'Select a country',
  'submit.state.label':      'State / Province (optional)',
  'submit.state.placeholder':'State / Province (optional)',
  'submit.captcha.warning':  'Please complete the CAPTCHA verification.',
  'submit.rate-limit':       'You have reached the limit of 3 submissions in the last hour. Please try again later.',

  /* ── Community extras ── */
  'community.draft.yes':      'Restore',
  'community.draft.no':       'Discard',
  'community.compose.cancel': 'Cancel',
  'community.captcha.warning':'Please complete the CAPTCHA.',
  'community.rate-limit':     'You\'ve reached the limit. Please wait before submitting another post.',

  /* ── Footer links ── */
  'footer.resources': 'Resources',
  'footer.about':     'About',

  /* ── Loading ── */
  'loading.reports': 'Loading reports…',

  /* ── Modals ── */
  'modal.disclaimer.title': 'About These Reports',
  'modal.disclaimer.body':  '<p>All reports on SafeVoice are submitted anonymously by community members and are completely unverified. We publish them because we believe people have the right to share their experiences and warn others — but we cannot confirm, investigate, or endorse any claim.</p><p>Treat each report as a starting point for your own awareness, not as verified fact.</p>',
  'modal.browse.title':     'How to Use Browse',
  'modal.browse.body':      '<p>The browse directory contains community-submitted safety awareness reports. You can search by name or location, filter by country or US state, and explore an interactive map.</p><p>Every report is user-submitted and unverified — use this as a starting point for awareness, never as a definitive verdict on anyone.</p>',
  'modal.submit.title':     'Before You Submit',
  'modal.submit.body':      '<p>Submitting a report adds a person\'s name, location, and the nature of your concern to a public directory. Please ensure your report is honest and submitted in good faith.</p><p>You are responsible for what you submit. Reports are permanent but can be appealed by the subject via the platform\'s review process.</p>',
  'modal.categories.title': 'Report Categories',
  'modal.categories.body':  '<p>Categories help others quickly understand the nature of the safety concern being reported. You may select multiple categories that apply to your experience.</p><p>These are broad community classifications used for awareness — they are not legal definitions, and selecting them does not constitute a formal accusation.</p>',
  'modal.community.title':  'Community Voices',
  'modal.community.body':   '<p>Community Voices is a moderated, anonymous space for survivors, allies, and supporters. It is organized into rooms — each with its own purpose and norms — so you can find the conversation that fits where you are right now.</p>',
  'modal.privacy.title':    'Your Privacy',
  'modal.privacy.body':     '<p>SafeVoice is built from the ground up to protect your privacy. You never need to create an account, provide an email, or log in to use any feature.</p><p>We have deliberately designed the system to minimize what we know about you — because your safety and anonymity are the entire point.</p>',

  /* ── Resources page modals — tab pane headers ── */
  'modal.res.immediate.title':  'About This Checklist',
  'modal.res.immediate.body':   '<p>These six steps are based on guidance from crisis advocates and survivor support organizations. They are ordered by urgency, but you do not need to complete them all at once — take what you can, when you can.</p><ul><li>No step is required — there is no right or wrong way to respond to what happened to you.</li><li>Steps can be revisited at any time; your situation may change what is possible.</li><li>A crisis hotline can walk you through each step if you need support.</li></ul>',
  'modal.res.hotlines.title':   'About These Hotlines',
  'modal.res.hotlines.body':    '<p>Every line listed here is free, confidential, and staffed by trained advocates or counselors. You do not need to be in immediate danger to call — they support anyone in distress.</p><ul><li>Calls from landlines typically do not appear on phone bills; cell calls may show the number called.</li><li>Text and chat options are available for those who cannot speak safely.</li><li>You can ask advocates about any option without committing to a course of action.</li></ul>',
  'modal.res.lgbtq.title':      'About LGBTQ+ Resources',
  'modal.res.lgbtq.body':       '<p>LGBTQ+ survivors face unique barriers when seeking help — including fear of being outed, distrust of law enforcement, and difficulty finding affirming services. These organizations are led by or specifically serve LGBTQ+ communities.</p><ul><li>All organizations listed affirm LGBTQ+ identities and do not require disclosure of your identity.</li><li>Resources span crisis hotlines, legal advocacy, mental health, and community support.</li><li>Both English and Spanish resources are included where available.</li></ul>',
  'modal.res.legal.title':      'About Legal Options',
  'modal.res.legal.body':       '<p>You have more legal options than filing a police report. Civil suits, protective orders, workplace complaints, and compensation programs all exist independently of criminal prosecution.</p><ul><li>Many legal protections can be accessed without an attorney — self-help desks exist at most courthouses.</li><li>Victim advocacy organizations provide free legal guidance and can accompany you to any legal proceeding.</li><li>International options for Canada and México are included throughout each section.</li></ul>',
  'modal.res.healing.title':    'About Healing Resources',
  'modal.res.healing.body':     '<p>Healing from trauma is not linear and there is no timeline. These resources cover a wide range of approaches — therapy, community, movement, reading, and digital tools — so you can find what fits where you are right now.</p><ul><li>No single approach works for everyone; trying different options is normal and encouraged.</li><li>Many resources are free or low-cost, including sliding-scale therapists and peer support communities.</li><li>Resources for Spanish speakers are included throughout each section.</li></ul>',
  'modal.res.safety.title':     'About Safety Planning',
  'modal.res.safety.body':      '<p>A safety plan is a personalized preparation for staying safer in a dangerous or potentially dangerous situation. Creating one — even partially — can make a real difference in an emergency.</p><ul><li>Nothing you type in this form is saved, transmitted, or stored anywhere.</li><li>A domestic violence advocate can help you build a more detailed plan for your specific situation.</li><li>You can print or save this plan as a PDF using your browser.</li></ul>',
  'modal.res.platform.title':   'About This Page',
  'modal.res.platform.body':    '<p>This section explains how SafeVoice works technically and what happens to data you submit. Transparency about our practices is fundamental to the trust this platform requires.</p><ul><li>All source code is public — you can read every line at github.com/namehim/namehim.</li><li>No hidden data collection occurs; what you see in your browser is all that exists.</li><li>The platform can be forked and self-hosted by anyone who wants to run their own instance.</li></ul>',

  /* ── Resources page modals — immediate checklist steps ── */
  'modal.step.safety.title':    'Why: Get to Safety First',
  'modal.step.safety.body':     '<p>Your physical safety is the most important priority. If you are still in a dangerous situation, nothing else can effectively happen until you are safe. Even moving to a different room or a neighbor\'s home may significantly reduce immediate risk.</p><ul><li>Call 911 (or local emergency number) if you are in immediate danger.</li><li>A domestic violence hotline can help you create an exit plan if leaving feels difficult or unsafe.</li><li>Safety planning — even mentally — increases your chances of getting out safely.</li></ul>',
  'modal.step.preserve.title':  'Why: Preserve Physical Evidence',
  'modal.step.preserve.body':   '<p>Forensic evidence from a sexual assault can be collected up to 120 hours (5 days) after the incident. This evidence can be crucial for legal action — even if you are not sure yet whether you want to report.</p><ul><li>You can have a SANE (Sexual Assault Nurse Examiner) exam without filing a police report — it preserves the option for later.</li><li>If you have already showered, medical providers can still document other injuries.</li><li>Store clothing in a paper bag (not plastic) if possible — plastic traps moisture and degrades evidence.</li></ul>',
  'modal.step.medical.title':   'Why: Seek Medical Attention',
  'modal.step.medical.body':    '<p>A medical exam serves multiple purposes beyond visible injuries. It can document evidence, screen for STIs, provide emergency contraception, and connect you with on-site advocates.</p><ul><li>You can request a SANE exam at most hospital emergency rooms — ask specifically for one.</li><li>Medical providers are required to treat you regardless of whether you file a police report.</li><li>Your health insurance may be billed, but most areas have crime victim assistance funds to cover costs.</li></ul>',
  'modal.step.tell.title':      'Why: Tell Someone You Trust',
  'modal.step.tell.body':       '<p>Disclosing to a trusted person — a friend, family member, or counselor — can break the isolation that trauma creates. It also creates a witness who can support you in future legal or medical settings.</p><ul><li>You control what you share and with whom — there is no obligation to share every detail.</li><li>If a trusted person responds poorly, that is not a reflection of you or what happened.</li><li>A crisis hotline provides a judgment-free person to talk to if no one in your life feels safe right now.</li></ul>',
  'modal.step.document.title':  'Why: Document Evidence',
  'modal.step.document.body':   '<p>Written and digital records created shortly after an incident are far more credible than those created later. Documentation protects you whether you decide to pursue legal action now or in the future.</p><ul><li>Write down what happened in as much detail as possible — time, location, what was said, who was present.</li><li>Screenshot any digital communications (texts, emails, social media) and store them in multiple places.</li><li>Email records to yourself or a trusted person so there is a timestamped copy outside your device.</li></ul>',
  'modal.step.hotline.title':   'Why: Contact a Crisis Hotline',
  'modal.step.hotline.body':    '<p>Crisis advocates are trained specifically to support survivors. They can walk you through your options, help you decide what to do next, and connect you with local services — all without pressuring you into any decision.</p><ul><li>You do not need to be in immediate crisis to call; they help anyone who has experienced abuse or assault.</li><li>Calls are confidential and do not obligate you to report to police.</li><li>Chat and text options are available if calling feels unsafe or difficult.</li></ul>',

  /* ── Resources page modals — hotline group headers ── */
  'modal.hl.us.title':          'US Crisis Lines',
  'modal.hl.us.body':           '<p>These national US lines are free, confidential, and available 24/7. Each line specializes in a specific type of crisis or community, so you can find the one best matched to your situation.</p><ul><li>RAINN connects you to a local sexual assault service provider in addition to national support.</li><li>The National DV Hotline has live chat available at thehotline.org if calling is not safe.</li><li>988 serves anyone in emotional distress — not only those in suicidal crisis.</li></ul>',
  'modal.hl.lgbtq.title':       'LGBTQ+ Crisis Lines',
  'modal.hl.lgbtq.body':        '<p>These lines are staffed by people who understand the specific barriers LGBTQ+ survivors face, including fear of being outed, rejection by family, and distrust of mainstream services.</p><ul><li>Trans Lifeline is staffed exclusively by transgender operators — for trans and non-binary callers.</li><li>The Trevor Project offers crisis support specifically for LGBTQ+ youth under 25.</li><li>All lines maintain confidentiality and do not share information with family or law enforcement without consent.</li></ul>',
  'modal.hl.ca.title':          'Canadian Crisis Lines',
  'modal.hl.ca.body':           '<p>Canadian crisis lines operate under provincial and federal privacy laws that protect your confidentiality. Services are available in English and French, with some available in additional languages.</p><ul><li>The Assaulted Women\'s Helpline is available in 154 languages with interpreter support.</li><li>Kids Help Phone serves young people across Canada with chat and text options.</li><li>Provincial 211 services can connect you to local shelters, legal aid, and support programs.</li></ul>',
  'modal.hl.mx.title':          'Líneas de Crisis en México',
  'modal.hl.mx.body':           '<p>Estas líneas ofrecen apoyo confidencial y gratuito para personas en México que han experimentado violencia, abuso o crisis emocional. La atención está disponible en español las 24 horas.</p><ul><li>INMUJERES Línea de la Mujer está disponible las 24 horas, los 7 días de la semana — gratuita desde cualquier teléfono.</li><li>SAPTEL ofrece apoyo psicológico por teléfono sin necesidad de dar tu nombre.</li><li>CNDH puede orientarte sobre tus derechos y las instituciones de tu región.</li></ul>',

  /* ── Resources page modals — LGBTQ+ sub-sections ── */
  'modal.lgbtq.us.title':       'US LGBTQ+ Organizations',
  'modal.lgbtq.us.body':        '<p>These organizations provide advocacy, legal resources, education, and community support for LGBTQ+ people across the United States. Many offer direct services as well as referrals to local programs.</p><ul><li>Lambda Legal provides free legal assistance and Know Your Rights guides for LGBTQ+ people facing discrimination.</li><li>PFLAG has local chapters in most US cities that provide in-person peer support for LGBTQ+ people and their families.</li><li>NCTE (National Center for Transgender Equality) is the leading resource for trans-specific legal rights and protections.</li></ul>',
  'modal.lgbtq.ca.title':       'Canadian LGBTQ+ Organizations',
  'modal.lgbtq.ca.body':        '<p>These Canadian organizations provide rights advocacy, health resources, and community support for LGBTQ+ people across the country. Federal and provincial human rights protections both apply.</p><ul><li>Egale Canada has policy resources and anti-violence programs at the national level.</li><li>Rainbow Health Ontario provides a directory of affirming healthcare providers searchable by location.</li><li>Provincial human rights commissions handle discrimination complaints — all provinces have protections based on sexual orientation and gender identity.</li></ul>',
  'modal.lgbtq.mx.title':       'Organizaciones LGBTQ+ en México',
  'modal.lgbtq.mx.body':        '<p>Estas organizaciones brindan apoyo, defensa de derechos y recursos comunitarios para personas LGBTQ+ en México. Trabajan en los ámbitos local y nacional.</p><ul><li>Letra S tiene amplia experiencia en derechos sexuales y documentación de violencia contra personas LGBTQ+.</li><li>Cuenta Conmigo ofrece grupos de apoyo y talleres para personas LGBTQ+ y sus familias.</li><li>CONAPRED recibe denuncias formales por discriminación basada en orientación sexual e identidad de género.</li></ul>',
  'modal.lgbtq.survivors.title':'For LGBTQ+ Survivors',
  'modal.lgbtq.survivors.body': '<p>LGBTQ+ survivors of abuse often face barriers not encountered by others — being outed during legal proceedings, shelters that don\'t serve their gender identity, or abusers who weaponize community ties. These organizations specialize in this intersection.</p><ul><li>FORGE provides resources specifically for transgender and non-binary survivors of sexual violence.</li><li>The Network / La Red runs a hotline and shelter specifically for LGBTQ+, polyamorous, and kink communities.</li><li>AVP maintains a national coalition of local LGBTQ+ anti-violence programs with crisis support and safety planning.</li></ul>',
  'modal.lgbtq.mh.title':       'LGBTQ+-Affirming Mental Health',
  'modal.lgbtq.mh.body':        '<p>Finding a therapist who truly affirms your identity can make a significant difference in the healing process. These directories specialize in connecting LGBTQ+ people with affirming providers.</p><ul><li>Therapy Den allows you to filter by LGBTQ+ identity, trauma specialization, and sliding-scale fees.</li><li>NQTTCN focuses specifically on queer and trans therapists of color, prioritizing intersectional care.</li><li>Open Path Collective offers sessions at $30–$80 — far below typical market rates — with many affirming providers.</li></ul>',
  'modal.lgbtq.community.title':'Online Community Spaces',
  'modal.lgbtq.community.body': '<p>Online communities can provide connection, validation, and practical advice from people who truly understand your experience — available any time, without geographic barriers.</p><ul><li>TrevorSpace is moderated specifically for LGBTQ+ youth (ages 13–24) and maintained by The Trevor Project.</li><li>Reddit communities like r/LGBTsurvivor are peer-moderated and can connect you with thousands of survivors.</li><li>Rainbow Railroad provides emergency assistance for LGBTQ+ people escaping violence or persecution.</li></ul>',

  /* ── Resources page modals — legal accordion items ── */
  'modal.legal.ro.title':       'Protective & Restraining Orders',
  'modal.legal.ro.body':        '<p>A protective order is a court order that legally prohibits an abuser from contacting or approaching you. Emergency orders can often be issued the same day at your local courthouse, without an attorney.</p><ul><li>Violating a protective order is a criminal offense — the abuser can be arrested immediately upon violation.</li><li>Available for domestic violence, sexual assault, stalking, and harassment — not only intimate partner situations.</li><li>Canada and México have equivalent mechanisms (peace bonds and órdenes de protección, respectively) available through local courts.</li></ul>',
  'modal.legal.le.title':       'Reporting to Law Enforcement',
  'modal.legal.le.body':        '<p>Reporting to police is entirely your choice. A victim advocate can help you weigh your options before and during any interaction with law enforcement — their services are free.</p><ul><li>You can have a SANE (forensic) exam done without filing a police report, preserving the option to report later.</li><li>Statutes of limitations vary widely — contact a legal aid organization to know your timeline before deciding.</li><li>If your report isn\'t taken seriously, a victim advocacy organization can help you escalate or file a formal complaint.</li></ul>',
  'modal.legal.civil.title':    'Civil Lawsuit',
  'modal.legal.civil.body':     '<p>A civil lawsuit allows you to seek financial damages from an abuser independently of any criminal case. The standard of proof is lower than in criminal court, and cases can proceed even if criminal charges were dropped.</p><ul><li>Damages can include medical costs, therapy expenses, lost wages, and pain and suffering.</li><li>Many attorneys specializing in sexual assault civil cases work on contingency — no upfront cost to you.</li><li>Canadian provinces have extended limitation periods for childhood abuse claims, so past incidents may still be actionable.</li></ul>',
  'modal.legal.eeoc.title':     'Workplace Protections (EEOC)',
  'modal.legal.eeoc.body':      '<p>Sexual harassment and assault in the workplace may trigger federal protections under Title VII (US). Filing a complaint with the EEOC is free and does not require an attorney.</p><ul><li>You must generally file within 180 or 300 days of the incident — the deadline varies by state.</li><li>Retaliation for reporting harassment is also illegal — a separate complaint can be filed if retaliation occurs.</li><li>Canada has equivalent protections through provincial human rights codes and the federal Canada Labour Code.</li></ul>',
  'modal.legal.titleix.title':  'Title IX (Schools)',
  'modal.legal.titleix.body':   '<p>Title IX requires any educational institution receiving federal funding to address sexual misconduct. Schools must have a Title IX coordinator and a formal complaint process.</p><ul><li>You can file directly with the US Department of Education\'s Office for Civil Rights if the school fails to respond adequately.</li><li>Title IX provides support measures — like no-contact orders and class changes — independent of any disciplinary outcome.</li><li>RAINN maintains a dedicated Title IX guide at rainn.org/title-ix with state-by-state information.</li></ul>',
  'modal.legal.comp.title':     'Victim Compensation Programs',
  'modal.legal.comp.body':      '<p>Every US state and Canadian province operates a fund to help crime victims pay for expenses resulting from the crime. A conviction is not required in most cases — only that the crime was reported.</p><ul><li>Covered expenses typically include medical care, therapy, lost wages, and relocation costs.</li><li>Sexual assault survivors in many states can access funds without a police report — check your state\'s requirements.</li><li>The National Association of Crime Victim Compensation Boards (nacvcb.org) has a directory of all state programs.</li></ul>',
  'modal.legal.free.title':     'Free Legal Help',
  'modal.legal.free.body':      '<p>You do not need to afford an attorney to get legal help. Legal aid organizations, victim advocacy programs, and law school clinics provide free or very low-cost legal assistance to survivors.</p><ul><li>legalaid.org and lawhelp.org both have searchable directories of free legal aid by US state.</li><li>WomensLaw.org provides free online legal information and a chat function staffed by trained advocates.</li><li>Immigration-aware legal services exist in most large cities — undocumented survivors have legal rights and can access help confidentially.</li></ul>',

  /* ── Resources page modals — healing accordion items ── */
  'modal.heal.therapist.title':    'Finding a Therapist',
  'modal.heal.therapist.body':     '<p>Trauma-specialized therapists use evidence-based approaches that are significantly more effective for recovery than general counseling. Looking for a specialist matters.</p><ul><li>Ask specifically for therapists trained in EMDR, CPT (Cognitive Processing Therapy), or somatic therapy — all have strong evidence for trauma recovery.</li><li>Many therapists offer sliding-scale fees based on income — always ask, even if the listed rate seems unaffordable.</li><li>Open Path Collective (openpathcollective.org) connects you with sessions at $30–$80 — far below typical rates.</li></ul>',
  'modal.heal.communities.title':  'Online Support Communities',
  'modal.heal.communities.body':   '<p>Peer communities of survivors offer something therapy sometimes cannot: the lived understanding of people who have been through similar experiences. Many are moderated and free.</p><ul><li>After Silence (aftersilence.org) is a moderated, private message board specifically for sexual assault survivors.</li><li>RAINN\'s Online Support Groups provide free, anonymous, facilitated groups for survivors of all ages.</li><li>Reddit communities like r/survivorsofabuse and r/CPTSD have hundreds of thousands of members and 24/7 availability.</li></ul>',
  'modal.heal.social.title':       'Social Media Communities',
  'modal.heal.social.body':        '<p>Social media communities for survivors can provide validation, solidarity, and a sense that you are not alone — at any hour, from anywhere.</p><ul><li>#MeToo and #SurvivorX on X/Twitter connect millions of survivors sharing experiences and resources.</li><li>Instagram accounts like @rainn, @survivorsalliance, and @nedratawwab share coping strategies and advocacy.</li><li>Private Facebook groups provide more intimate peer support with moderation — search "sexual assault survivors support group."</li></ul>',
  'modal.heal.podcasts.title':     'Podcasts for Survivors',
  'modal.heal.podcasts.body':      '<p>Podcasts allow you to engage with trauma recovery content on your own schedule, in private — no appointment, no cost, and no expectation to participate.</p><ul><li>"We Can Do Hard Things" (Glennon Doyle) and "Unlocking Us" (Brené Brown) address trauma, shame, and resilience accessibly.</li><li>"The Trauma Therapist Podcast" features leading specialists explaining trauma recovery in practical, non-clinical terms.</li><li>Spanish-language trauma resources are available on Spotify and Apple Podcasts — search "sobrevivir al trauma."</li></ul>',
  'modal.heal.books.title':        'Books for Recovery',
  'modal.heal.books.body':         '<p>Reading about trauma can normalize your experience, provide frameworks for understanding what happened, and suggest practical tools for healing — at your own pace.</p><ul><li>"The Body Keeps the Score" by Bessel van der Kolk is the foundational text on how trauma lives in the body and how to heal it.</li><li>"Trauma and Recovery" by Judith Herman remains the landmark work on recovering from interpersonal violence.</li><li>"Why Does He Do That?" by Lundy Bancroft is essential reading for survivors of emotional and physical abuse by partners.</li></ul>',
  'modal.heal.apps.title':         'Healing & Grounding Apps',
  'modal.heal.apps.body':          '<p>Mobile apps can provide immediate grounding tools, guided meditations, and mental health support — particularly useful during difficult moments between therapy sessions.</p><ul><li>Insight Timer (free) has thousands of meditations including trauma-specific programs by licensed therapists.</li><li>Sanvello (free tier) provides CBT-based tools specifically for anxiety, depression, and trauma with guided mood tracking.</li><li>EMDR Coach offers guided EMDR exercises for self-use between therapy sessions.</li></ul>',
  'modal.heal.somatic.title':      'Body-Based Healing',
  'modal.heal.somatic.body':       '<p>Trauma is stored in the body as much as in the mind. Somatic and body-based approaches work directly with the nervous system, often reaching what talk therapy cannot.</p><ul><li>Trauma-sensitive yoga is specifically adapted for survivors — different from regular yoga in its focus on autonomy and safety; find programs at traumasensitiveyoga.com.</li><li>Somatic experiencing targets stored trauma responses in the body; find certified practitioners at traumahealing.org.</li><li>Even simple movement — walks, stretching, dancing — helps regulate the nervous system and is always accessible.</li></ul>',
  'modal.heal.supporting.title':   'Supporting Someone Else',
  'modal.heal.supporting.body':    '<p>Supporting a survivor requires centering their needs and their timeline, not your own discomfort or desire to fix the situation. The most important thing is to believe them.</p><ul><li>Ask "what do you need right now?" rather than offering solutions — survivors often need to be heard before being helped.</li><li>Avoid questions like "why didn\'t you leave?" or "are you sure?" — these shift responsibility to the survivor.</li><li>Secondary trauma is real — seek support for yourself through a counselor or support group if you are deeply affected by what a survivor shares with you.</li></ul>',

  /* ── report-flow.html modals ── */
  'modal.flow.start.title':     'Before You Start',
  'modal.flow.start.body':      '<p>The guided flow is designed to help you submit a thoughtful, complete safety report at your own pace. Understanding a few things first will help you use it effectively.</p><ul><li>Reports are public and permanent — they cannot be deleted by you after submission, but the subject can request a review.</li><li>You can stop and return later; your browser does not retain partial form data across sessions.</li><li>If you need emotional support before submitting, the Resources page has crisis hotlines available 24/7.</li></ul>',
  'modal.flow.what.title':      'What Happened — Categories',
  'modal.flow.what.body':       '<p>Categories help the community quickly understand the nature of your safety concern. They are broad awareness classifications — not legal definitions — and multiple categories can apply to a single experience.</p><ul><li>Select every category that applies; you are not limited to one.</li><li>These categories are used only for filtering and awareness — they do not trigger any legal process.</li><li>If none of the categories fully describe your experience, choose the closest match and use the description field to add context.</li></ul>',
  'modal.flow.who.title':       'About the Person',
  'modal.flow.who.body':        '<p>This step collects the minimum information needed to create a useful community safety record. Only letters A–Z are accepted in name and location fields to protect submitter privacy.</p><ul><li>Use the person\'s commonly known name — the one most people would recognize them by.</li><li>City should reflect where the person lives or where the incident occurred, as this helps others in that area.</li><li>State/province is optional but makes location-based searches significantly more useful.</li></ul>',
  'modal.flow.exp.title':       'Your Experience',
  'modal.flow.exp.body':        '<p>The description field lets you provide context beyond the category tags. It is optional — a report without a description is still valid and published — but specificity helps others understand the nature of the concern.</p><ul><li>Include approximate dates, describe specific behaviors (not just labels like "abusive"), and note any patterns.</li><li>Do not include your own identifying information — your name, address, or workplace.</li><li>The description is publicly visible alongside the report — write only what you are comfortable sharing openly.</li></ul>',
  'modal.flow.review.title':    'Review & Submit',
  'modal.flow.review.body':     '<p>This is your final opportunity to review everything before your report becomes part of the public record. Read each field carefully before clicking Submit.</p><ul><li>Once submitted, reports cannot be edited or removed by you — only the platform review process can remove them.</li><li>The CAPTCHA is required to prevent spam; it is not linked to your identity.</li><li>After submitting, you can browse the live report listing or visit the Resources page for support.</li></ul>',

  /* ── about.html modals ── */
  'modal.about.what.title':     'What SafeVoice Is',
  'modal.about.what.body':      '<p>SafeVoice is a community-driven, open-source awareness tool for sharing safety concerns about individuals. It is not a court, not a law enforcement tool, and not a place for legal accusations — it is a space for community awareness.</p><ul><li>Reports are submitted anonymously by community members and are not verified by the platform.</li><li>The platform is welcoming to people of all genders, orientations, and backgrounds — reports about anyone can be submitted.</li><li>All code is publicly available for review, ensuring transparency about how the platform operates.</li></ul>',
  'modal.about.name.title':     'The Original Name',
  'modal.about.name.body':      '<p>The platform was forked from a project called "NameHim," a name chosen deliberately to address a measurable statistical reality about who commits abuse. The name has evolved to SafeVoice to better reflect the inclusive mission.</p><ul><li>Over 98% of violent crimes are committed by men — the original name pointed to a pattern, not a universal judgment.</li><li>Nothing prevents anyone from submitting reports about people of any gender; the platform treats all reports the same way.</li><li>The name SafeVoice reflects the mission: providing a safe space for anyone to speak.</li></ul>',
  'modal.about.use.title':      'How to Use This Site',
  'modal.about.use.body':       '<p>Every report on SafeVoice is user-generated and unverified. The platform publishes them because community awareness has value — but they should never be treated as verified facts or final verdicts.</p><ul><li>Treat a report as a starting point for your own awareness and research, not as a definitive statement about someone.</li><li>Do not make employment, housing, or relationship decisions based solely on an unverified report.</li><li>If you have serious safety concerns, contact law enforcement — this site is not a substitute for official channels.</li></ul>',
  'modal.about.legal.title':    'Legal & Safety Notice',
  'modal.about.legal.body':     '<p>SafeVoice is a community awareness platform, not a legal system. It cannot replace law enforcement, courts, restraining orders, or professional safety advice.</p><ul><li>If someone is in immediate danger, call 911 or your local emergency number — do not rely on this site.</li><li>For serious accusations, go to the police — a SafeVoice report is not a substitute for a criminal complaint.</li><li>The Resources page has hotlines, legal aid, and victim advocacy contacts for anyone who needs real-world support.</li></ul>',
  'modal.about.oss.title':      'Open Source & Transparency',
  'modal.about.oss.body':       '<p>SafeVoice is entirely open source. Every line of code is publicly auditable, and the live moderated dataset is downloadable. This transparency is fundamental to the trust the platform requires.</p><ul><li>Full source code is at github.com/namehim/namehim — anyone can read, fork, or improve it.</li><li>The live moderated dataset is available at api.namehim.app/filtered-reports — updated every 30 seconds.</li><li>Anyone can run their own instance of SafeVoice — the platform is designed to survive any single point of failure.</li></ul>',
  'modal.about.privacy.title':  'Privacy & Data Collection',
  'modal.about.privacy.body':   '<p>SafeVoice is deliberately designed to collect almost nothing about you. Your anonymity is central to how the platform works — not an afterthought.</p><ul><li>No accounts, emails, or passwords are required for any feature; no IP addresses are stored permanently.</li><li>Only a random anonymous browser ID is stored locally (for rate limiting) — it cannot identify you and can be cleared at any time.</li><li>What you see on the page is all that exists — there is no hidden data collection or tracking.</li></ul>',
  'modal.about.build.title':    'Build Your Own',
  'modal.about.build.body':     '<p>The platform is explicitly designed to be forked and self-hosted by anyone who cares about this mission. No single organization controls it, and the code can survive any individual site going down.</p><ul><li>Fork the GitHub repository and deploy to any hosting provider — the setup requires only Node.js and a Supabase instance.</li><li>The live dataset is downloadable, so any fork can start with real community data.</li><li>Contributions, bug reports, and improvements are always welcome at the GitHub repository.</li></ul>',
  'modal.about.why.title':      'Why This Exists',
  'modal.about.why.body':       '<p>The original site went down within days of launching. The need it was filling — a space for community safety awareness — did not go away. SafeVoice is an attempt to keep that door open in a more sustainable, transparent, and inclusive form.</p><ul><li>People have a right to share their safety experiences and warn others in their community.</li><li>No existing platform adequately serves this specific need in a way that centers survivor safety and privacy.</li><li>The platform is designed to be resilient — open source, forkable, and not dependent on any single person to survive.</li></ul>',

  /* ── About page body ── */
  'about.what.p':      'SafeVoice is a community-driven, open-source awareness tool. It is not a place to make legal accusations. It is simply a place for people to say: "This person raised concerns for me in these specific ways." It is welcoming to people of all genders, sexual orientations, and backgrounds.',
  'about.name.p1':     'This platform was forked from a project called "NameHim" — a name chosen with purpose. Over 98% of violent crimes are committed by men. The vast majority of sexual assaults, harassment, and other forms of abuse are perpetrated by men. This is not about blaming every man; it\'s about naming a real, measurable, systemic problem in our society.',
  'about.name.p2':     'Nothing stops people from adding the names of abusers of any gender. Anyone is free to do so. But the original name pointed to the pattern, not the exception. We have evolved the name to SafeVoice to reflect our commitment to being a fully inclusive, welcoming space — for women, LGBTQ+ people, and everyone else who needs a safe place to speak.',
  'about.use.p':       'Everything on this site is user-generated and unverified. We do not investigate, confirm, or endorse any claim. If you come across a name here, treat it as a starting point — someone to be aware of, to do your own research on. It is not about demonizing anyone permanently. It is a signal: be aware, and check for yourself.',
  'about.legal.p':     'This site does not replace law enforcement, courts, or professional advice. If you believe someone is in immediate danger, call 911 (or your local emergency number). For serious accusations, go to the police — not just this website. See our <a href="resources.html">Resources page</a> for hotlines, legal options, and support.',
  'about.oss.p1':      'This entire project is open source. You can read every line of code, suggest improvements, or report issues at our GitHub repository: <a href="https://github.com/namehim/namehim" rel="noopener noreferrer">github.com/namehim/namehim</a>',
  'about.oss.p2':      'If you want to fork this project or run your own version, you can download the live, moderated dataset at: <a href="https://api.namehim.app/filtered-reports" rel="noopener noreferrer">api.namehim.app/filtered-reports</a>. The data is updated every 30 seconds and excludes entries removed by moderation.',
  'about.privacy.intro': 'We collect almost nothing. Your privacy is central to how SafeVoice works.',
  'about.privacy.li1': '<strong>No accounts, no emails, no passwords.</strong> You never sign up or log in.',
  'about.privacy.li2': '<strong>No IP addresses are stored.</strong> A temporary IP check is used only for rate limiting — it is never saved and expires within 60 seconds.',
  'about.privacy.li3': '<strong>No tracking cookies.</strong> We only store a random anonymous ID in localStorage to enforce rate limits (max 3 reports per hour). This ID cannot identify you.',
  'about.privacy.li4': '<strong>What you see in browser dev tools is the same data shown on the page</strong> — name, location, category, timestamp. No hidden data can re-identify submitters.',
  'about.privacy.li5': 'The <code>submitter_uuid</code> field in the raw API is a random, one-time identifier. It cannot be linked to your real identity. You can clear it anytime by clearing your browser storage.',
  'about.privacy.footer': 'In short: we don\'t know who you are, and we don\'t want to. Your safety and anonymity are the whole point.',
  'about.build.p':     'We encourage anyone who cares about this mission to fork this code, improve it, and run their own version. If anything ever happens to this site, the work can continue in the hands of anyone who wants to carry it forward. This should never be controlled by one person or one organization.',
  'about.why.p':       'The original site went down within days of launching. People still need a space to share concerns anonymously and responsibly, without fear. This is an attempt to keep that door open — improved and maintained over time. Suggestions are always welcome.',

  /* ── Guided flow wizard ── */
  'flow.exit.btn':             'Exit quickly',
  'flow.btn.continue':         'Continue',
  'flow.btn.back':             'Back',
  'flow.btn.edit':             'Edit',
  'flow.btn.review':           'Review',
  'flow.btn.submit':           'Submit Report',
  'flow.step1.title':          'Before you start',
  'flow.step1.subtitle':       'Please read this carefully. SafeVoice is a public community safety awareness tool. What you submit will be visible to everyone.',
  'flow.step1.card1':          '<strong>Reports are permanent.</strong> Once submitted, your report is publicly visible and cannot be removed by you. The subject may appeal through the platform\'s review process.',
  'flow.step1.card2':          '<strong>Honesty is required.</strong> Submit only reports based on genuine experiences. False reports undermine community safety and may expose you to legal liability.',
  'flow.step1.card3':          '<strong>Your anonymity is protected.</strong> No account, email, or IP address is stored. A CAPTCHA is required to prevent spam — it is not linked to your identity.',
  'flow.step1.card4':          '<strong>Need support first?</strong> If you\'re in crisis or need guidance, visit <a href="resources.html#/hotlines">our resources page</a> before submitting. Trained advocates can help you decide what to do.',
  'flow.step1.consent':        'I understand that this report will be publicly visible and permanent, and I am submitting it in good faith based on my genuine experience.',
  'flow.step1.std-form':       'Use standard form instead',
  'flow.step2.title':          'What happened?',
  'flow.step2.subtitle':       'Select all categories that apply to your experience. You can choose multiple. These are community awareness classifications, not legal definitions.',
  'flow.step2.count':          '{n} selected',
  'flow.step2.error':          'Please select at least one category.',
  'flow.step3.title':          'About the person',
  'flow.step3.subtitle':       'Enter the person\'s name and location. Only letters A–Z are accepted to protect privacy. All fields with * are required.',
  'flow.step3.name.label':     'Full name *',
  'flow.step3.name.placeholder': 'First and last name',
  'flow.step3.name.error':     'Name is required (letters only, 2–20 characters).',
  'flow.step3.city.label':     'City *',
  'flow.step3.city.placeholder': 'City where they reside or where the incident occurred',
  'flow.step3.city.error':     'City is required (letters only).',
  'flow.step3.country.label':  'Country *',
  'flow.step3.country.default':'Select a country',
  'flow.step3.country.error':  'Please select a country.',
  'flow.step3.state.label':    'State / Province (optional)',
  'flow.step3.state.placeholder': 'State or province (optional)',
  'flow.step4.title':          'Your experience',
  'flow.step4.subtitle':       'Describe what happened in your own words. Be specific but avoid including identifying information about yourself. This field is optional but helps the community understand the nature of your concern.',
  'flow.step4.desc.label':     'Description (optional, max 1000 characters)',
  'flow.step4.desc.placeholder': 'Describe what happened. You may include dates, context, and the nature of the behavior. Do not include your own identifying information.',
  'flow.step4.tips.title':     'Tips for a helpful report:',
  'flow.step4.tips.text':      'Include approximate dates, describe specific behaviors (not just "he was abusive"), and mention any patterns. Avoid names of other people who are not the subject of the report.',
  'flow.step5.title':          'Review & Submit',
  'flow.step5.subtitle':       'Please review your report carefully before submitting. Once submitted, it cannot be changed or removed by you.',
  'flow.step5.captcha.warning':'Please complete the CAPTCHA.',
  'flow.step5.rate-limit':     'You have reached the limit of 3 submissions in the last hour. Please try again later.',
  'flow.review.name':          'Name',
  'flow.review.location':      'Location',
  'flow.review.categories':    'Categories',
  'flow.review.description':   'Description',
  'flow.review.not-provided':  '(not provided)',
  'flow.review.no-desc':       'No description provided',
  'flow.success.title':        'Report submitted',
  'flow.success.desc':         'Thank you for contributing to community safety. Your report is now publicly visible in the browse listing.',
  'flow.success.browse':       'Browse reports',
  'flow.success.resources':    'Resources & support',

  /* ── Resources: immediate pane (progress format) ── */
  'immediate.progress.fmt':    '{n} of 6 steps completed',

  /* ── Resources: LGBTQ+ section labels ── */
  'lgbtq.section.us':        'Organizations & Advocacy (United States)',
  'lgbtq.section.ca':        'Organizations & Advocacy (Canada)',
  'lgbtq.section.mx':        'Organizaciones (México)',
  'lgbtq.section.survivors': 'For LGBTQ+ Survivors of Abuse',
  'lgbtq.section.mental':    'LGBTQ+-Affirming Mental Health',
  'lgbtq.section.community': 'Community & Online Spaces',

  /* ── Resources: accordion titles ── */
  'platform.acc.submit':      'Submitting a Report',
  'platform.acc.privacy':     'Your Privacy & Anonymity',
  'platform.acc.moderation':  'Moderation & Flagging',
  'platform.acc.appeal':      'Appealing a Report About You',
  'platform.acc.oss':         'Open source',
  'healing.acc.therapist':    'Finding a Counselor',
  'healing.acc.communities':  'Online Communities & Support Groups',
  'healing.acc.social':       'Social Media & Hashtag Communities',
  'healing.acc.podcasts':     'Podcasts for Survivors',
  'healing.acc.books':        'Books & Reading',
  'healing.acc.apps':         'Apps for Healing & Grounding',
  'healing.acc.somatic':      'Body-Based & Somatic Healing',
  'healing.acc.supporting':   'Supporting Someone Else',
  'legal.acc.protective':     'Protective & Restraining Orders',
  'legal.acc.reporting':      'Reporting to Law Enforcement',
  'legal.acc.civil':          'Civil Lawsuit',
  'legal.acc.eeoc':           'Workplace Protections (EEOC / Title VII)',
  'legal.acc.titleix':        'Title IX (Schools & Universities)',
  'legal.acc.compensation':   'Victim Compensation Programs',
  'legal.acc.freelegal':      'Free Legal Help',
},

/* ────────────────────────────────────────────────────────────────
   ESPAÑOL
──────────────────────────────────────────────────────────────── */
es: {
  /* ── Navegación ── */
  'nav.browse':     'Explorar',
  'nav.submit':     'Reportar',
  'nav.community':  'Comunidad',
  'nav.resources':  'Recursos',
  'nav.about':      'Acerca de',
  'nav.lang':       'EN',

  /* ── Avisos de descargo ── */
  'disclaimer.resources': 'Los recursos aquí son solo informativos. Si estás en peligro inmediato, llama al 911 ahora.',
  'disclaimer.main':      'Todos los reportes son enviados por usuarios y no están verificados. No reemplaza a las autoridades.',
  'disclaimer.submit':    'Todos los reportes son públicos y permanentes. Envía solo reportes honestos y de buena fe.',

  /* ── Encabezado de la página de recursos ── */
  'resources.hero.title': 'Recursos y Apoyo',
  'resources.hero.desc':  'No estás sola/solo. Tanto si has vivido abuso, acoso o agresión — como si estás apoyando a alguien que lo ha vivido — este es tu punto de partida. Toma lo que necesites, en el orden que te parezca bien.',

  /* ── Banner de emergencia ── */
  'emergency.danger':   'Considera llamar a los servicios de emergencia ahora.',
  'emergency.desc':     'Considera llamar a los servicios de emergencia ahora.',
  'emergency.911.num':  '911',
  'emergency.911.lbl':  'EE.UU. / Canadá / México',

  /* ── Etiquetas de pestañas ── */
  'tab.immediate': 'Ahora',
  'tab.hotlines':  'Líneas de Crisis',
  'tab.lgbtq':     'LGBTQ+',
  'tab.healing':   'Sanación',
  'tab.safety':    'Plan de Seguridad',
  'tab.platform':  'Cómo Funciona',
  'tab.legal':     'Opciones Legales',

  /* ── Pestaña Ahora ── */
  'immediate.title': 'Qué Hacer Ahora Mismo',
  'immediate.desc':  'Si acabas de vivir abuso, agresión o acoso — estos pasos pueden protegerte y preservar tus opciones. No tienes que hacerlo todo a la vez. Marca cada paso conforme lo completes.',
  'immediate.progress': '0 de 6 pasos completados',
  'immediate.reset':    'Reiniciar',
  'immediate.step1.title': 'Ponerte a salvo',
  'immediate.step1.desc':  'Sal de la situación si puedes hacerlo con seguridad. Ve a un lugar donde te sientas protegida/o — la casa de alguien de confianza, un espacio público o un refugio.',
  'immediate.step2.title': 'No te bañes ni cambies de ropa (en caso de agresión sexual)',
  'immediate.step2.desc':  'La evidencia forense puede recolectarse hasta 120 horas después. Guarda tu ropa en una bolsa de papel si es posible.',
  'immediate.step3.title': 'Busca atención médica',
  'immediate.step3.desc':  'Aunque te sientas bien, un examen médico puede documentar lesiones y preservar evidencia sin comprometerte a hacer una denuncia policial.',
  'immediate.step4.title': 'Cuéntaselo a alguien de confianza',
  'immediate.step4.desc':  'Una amistad, familiar o consejera/o. Decirlo en voz alta a alguien que te apoya puede ser el primer paso hacia la sanación.',
  'immediate.step5.title': 'Documenta la evidencia',
  'immediate.step5.desc':  'Guarda capturas de pantalla, mensajes, fotos de lesiones. Escribe lo que pasó mientras lo recuerdas bien. Envíate copias a ti misma/o o a alguien de confianza.',
  'immediate.step6.title': 'Llama a una línea de crisis',
  'immediate.step6.desc':  'Personas capacitadas pueden guiarte en cada siguiente paso. No tienes que tomar ninguna decisión — solo hablar con alguien que entiende.',
  'immediate.done':        'Completaste los seis pasos. Eso tomó mucho valor. Una persona de apoyo en crisis puede ayudarte a decidir qué sigue — ve a la pestaña Líneas de Crisis. No estás sola/solo.',
  'immediate.notready.title': '¿Todavía no estás lista/o para actuar?',
  'immediate.notready.desc':  'Está bien. Saber que estos pasos existen ya es suficiente por hoy. Esta página estará aquí cuando estés lista/o. No tienes ninguna obligación de actuar en el tiempo de nadie más.',

  /* ── Pestaña Líneas de Crisis ── */
  'hotlines.title': 'Líneas de Crisis',
  'hotlines.desc':  'Gratuitas, confidenciales, disponibles las 24 horas los 7 días. No necesitas estar en crisis para llamar — están ahí para cualquier nivel de angustia. Las llamadas no aparecen en la mayoría de las facturas telefónicas si se hacen desde un teléfono fijo.',
  'hotlines.group.us':    'Estados Unidos',
  'hotlines.group.lgbtq': 'Líneas Específicas LGBTQ+',
  'hotlines.group.ca':    'Canadá',
  'hotlines.group.mx':    'México',

  /* ── Pestaña LGBTQ+ ── */
  'lgbtq.title': 'Recursos y Apoyo LGBTQ+',
  'lgbtq.desc':  'El abuso ocurre en todas las comunidades. Las personas sobrevivientes LGBTQ+ enfrentan barreras únicas — incluyendo el miedo a ser expuestas, la discriminación por parte de las autoridades, y la dificultad para encontrar servicios que las afirmen. Mereces apoyo que te vea y te respete plenamente.',
  'lgbtq.callout': 'Mereces apoyo sin importar tu identidad de género, orientación sexual o estructura de relación. Ser LGBTQ+ no hace que el abuso sea más aceptable — y no significa que tengas que enfrentarlo sola/solo.',
  'lgbtq.hotlines.note': '¿Buscas líneas de crisis telefónicas? Todas las líneas específicas LGBTQ+ también están en la pestaña Líneas de Crisis →',

  /* ── Pestaña Sanación ── */
  'healing.title': 'Sanación y Apoyo Emocional',
  'healing.desc':  'Sanar del trauma es profundamente personal, no es lineal y toma el tiempo que toma. No hay una manera correcta — ni un plazo. Buscar apoyo no es debilidad; es una de las cosas más valientes que puedes hacer.',
  'healing.callout': 'Lo que te pasó no fue tu culpa. Tienes derecho a sentir todo — enojo, tristeza, entumecimiento, confusión. Nada de eso define quién eres.',

  /* ── Pestaña Plan de Seguridad ── */
  'safety.title': 'Plan de Seguridad',
  'safety.desc':  'Un plan de seguridad es un plan personalizado y práctico para mantenerte más segura/o en una situación peligrosa o potencialmente peligrosa. Usa los campos a continuación para redactar uno de forma privada — nada de esto se guarda ni se transmite.',
  'safety.privacy': 'Tu privacidad: Este formulario existe solo en tu navegador. Nada de lo que escribas aquí se envía a ningún lugar ni se guarda al cerrar la pestaña. Una persona especialista en violencia doméstica también puede ayudarte a crear un plan personalizado — llama a cualquier línea en la pestaña Líneas de Crisis.',
  'safety.contacts.label': 'Contactos de emergencia',
  'safety.contact1': 'Persona de confianza #1 (nombre y teléfono)',
  'safety.contact2': 'Persona de confianza #2 (nombre y teléfono)',
  'safety.code':    'Palabra clave (una frase que indica que necesitas ayuda)',
  'safety.exit.label': 'Estrategia de salida',
  'safety.exits':   'Salidas seguras de tu casa o lugar de trabajo',
  'safety.place':   'A dónde puedes ir rápidamente si necesitas salir',
  'safety.docs.label': 'Documentos y artículos esenciales',
  'safety.checklist.prompt': 'Marca lo que tienes accesible o preparado:',
  'safety.check.id':    'Identificación / Pasaporte',
  'safety.check.cash':  'Efectivo o tarjeta',
  'safety.check.meds':  'Medicamentos',
  'safety.check.phone': 'Cargador de teléfono',
  'safety.check.docs':  'Documentos respaldados',
  'safety.check.plan':  'Persona de confianza conoce mi plan',
  'safety.notes.label': 'Notas',
  'safety.notes':   'Cualquier otro detalle importante para tu plan',
  'safety.print':   'Imprimir / Guardar como PDF',
  'safety.clear':   'Borrar todos los campos',
  'safety.contact1.placeholder': 'p.ej. María — 555-0100',
  'safety.contact2.placeholder': 'p.ej. Alex — 555-0200',
  'safety.code.placeholder':     'p.ej. "¿Puedes traerme el libro azul?"',
  'safety.exits.placeholder':    'p.ej. Puerta trasera → callejón → casa del vecino. Escalera de incendios al norte…',
  'safety.place.placeholder':    'p.ej. Casa de María en Av. Juárez 123 / biblioteca central',
  'safety.notes.placeholder':    'Señales de alerta, situaciones a evitar, dirección de refugio cercano…',

  /* ── Pestaña Cómo Funciona ── */
  'platform.title': 'Cómo Funciona Este Sitio',
  'platform.desc':  'SafeVoice es una plataforma de conciencia comunitaria anónima y de código abierto. Aquí está exactamente lo que sucede cuando envías, navegas o interactúas con la plataforma.',

  /* ── Pestaña Opciones Legales ── */
  'legal.title': 'Opciones Legales',
  'legal.desc':  'Tienes opciones legales más allá de presentar una denuncia policial. Estas protecciones existen de forma independiente a cualquier proceso penal. Una organización de apoyo a víctimas o una abogada/o pueden ayudarte a entender qué aplica — muchos servicios son gratuitos.',

  /* ── Pie de página ── */
  'footer.tagline': 'SafeVoice — Seguridad comunitaria de código abierto',

  /* ── Página Acerca de ── */
  'about.title':    'Acerca de SafeVoice',
  'about.what.h':   'Qué es esto',
  'about.name.h':   'Sobre el nombre original y la misión',
  'about.use.h':    'Cómo usar esta información',
  'about.legal.h':  'Aviso legal y de seguridad',
  'about.oss.h':    'Código abierto y transparencia',
  'about.privacy.h':'Privacidad y recolección de datos',
  'about.build.h':  'Crea tu propia versión',
  'about.why.h':    'Por qué existe esto',

  /* ── Página principal ── */
  'index.search.placeholder': 'Buscar por nombre, ciudad o categoría…',
  'index.submit.btn':   'Enviar Reporte',
  'index.browse.title': 'Explorar Reportes',
  'index.submit.title': 'Enviar un Reporte',
  'index.community.title': 'Comunidad',

  /* ── Salas de la Comunidad ── */
  'community.hero.title': 'Voces de la Comunidad',
  'community.hero.desc':  'Un espacio moderado para sobrevivientes, aliadas/os y personas solidarias — anónimo, interseccional y construido sobre la solidaridad. Elige una sala abajo, o lee y reacciona a lo que otras personas han compartido.',
  'community.exit.btn':   'Salir rápido',
  'community.exit.title': 'Salida rápida: abandona esta página de inmediato',

  'community.room.stories':   'Historias de Sobrevivientes',
  'community.room.hope':      'Mensajes de Esperanza',
  'community.room.ask':       'Pregunta a la Comunidad',
  'community.room.lgbtq':     'Voces LGBTQ+',
  'community.room.trans':     'Trans y No Binario',
  'community.room.allies':    'Para Aliadas/os',
  'community.room.legal':     'Legal y Judicial',
  'community.room.resources': 'Recomendaciones de Recursos',
  'community.room.men':       'Hombres que Han Experimentado Abuso',

  'community.room.stories.desc':   'Cuentas personales extensas. Comparte lo que pasó, dónde estás ahora, o cualquier cosa entre medio. Todas las historias son anónimas y moderadas.',
  'community.room.hope.desc':      'Mensajes cortos de esperanza, aliento y solidaridad. No se requiere trauma — solo calidez para quienes la necesitan.',
  'community.room.ask.desc':       'Publica una pregunta anónima. La comunidad responde. Nada es demasiado pequeño o abrumador para preguntar aquí.',
  'community.room.lgbtq.desc':     'Un espacio de afinidad para sobrevivientes y aliadas/os LGBTQ+. Las personas LGBTQ+ enfrentan barreras únicas — esta sala es explícitamente para esas experiencias.',
  'community.room.trans.desc':     'Espacio específico para sobrevivientes trans y no binarios. Las personas trans son objetivos desproporcionados de abuso — perteneces aquí y tus experiencias son válidas.',
  'community.room.allies.desc':    'Escrito por sobrevivientes, para quienes las/os aman. Cómo ayudar, qué no decir, cómo estar presente sin tomar el control.',
  'community.room.legal.desc':     'Conocimiento de sobreviviente a sobreviviente sobre navegar sistemas legales. No es asesoramiento legal — es experiencia vivida. Consulta siempre con una/un defensora/defensor calificada/o.',
  'community.room.resources.desc': 'Vínculos curados por la comunidad a líneas de crisis, refugios, libros, podcasts y herramientas. Si algo te ayudó, compártelo.',
  'community.room.men.desc':       'El abuso afecta a personas de todos los géneros. Esta sala es un espacio acogedor y sin juicios para hombres y sobrevivientes masculinos.',

  /* ── Compositor ── */
  'community.compose.btn':           'Comparte tu voz',
  'community.compose.step1.title':   'Elige una sala',
  'community.compose.step1.desc':    '¿Dónde encaja tu publicación? Elige el espacio que mejor se adapte.',
  'community.compose.step2.title':   'Nota de contenido',
  'community.compose.step2.desc':    '¿Tu publicación describe violencia, agresión sexual o control coercitivo? Una nota de contenido permite a las/los lectores elegir cuándo están listos.',
  'community.compose.step3.title':   'Escribe tu publicación',
  'community.compose.step3.desc':    'Comparte con tus propias palabras. Sin nombres, sin detalles identificatorios.',
  'community.compose.step4.title':   'Vista previa',
  'community.compose.step4.desc':    'Así aparecerá tu publicación. ¿Lista/o para enviar?',
  'community.compose.step5.title':   'Verificación',
  'community.compose.next':          'Continuar →',
  'community.compose.back':          '← Atrás',
  'community.compose.submit':        'Enviar',
  'community.compose.tags.label':    'Agregar etiquetas (opcional)',
  'community.compose.title.label':   'Título (opcional)',
  'community.compose.content.label': 'Tu publicación *',
  'community.compose.content.placeholder': 'Comparte tu experiencia, pregunta o mensaje… (sin nombres ni detalles identificatorios)',
  'community.compose.draft.saved':   'Borrador guardado',
  'community.compose.draft.restore': 'Tienes un borrador guardado. ¿Restaurarlo?',
  'community.compose.pii.warning':   'Tu publicación puede contener información personal (nombre, contacto o ubicación). Por favor revisa antes de enviar — para tu propia protección.',
  'community.compose.crisis.overlay.title':  'Te vemos. No estás sola/solo.',
  'community.compose.crisis.overlay.desc':   'Tus palabras sugieren que puedes estar pasando por algo muy difícil ahora mismo. Antes de publicar, debes saber que hay apoyo real y confidencial disponible ahora — 24/7, gratuito y anónimo.',
  'community.compose.crisis.hotline':        'Línea Nacional de Crisis',
  'community.compose.crisis.chat':           'Línea de texto de crisis — envía HOLA al 741741',
  'community.compose.crisis.continue':       'Continuar escribiendo de todas formas',
  'community.compose.success.title':         'Gracias por compartir tu voz.',
  'community.compose.success.desc':          'Tu publicación fue enviada para revisión. Normalmente tarda 24–48 horas en aparecer. Mientras esperas, puede reconfortarte leer lo que otras personas han compartido.',
  'community.compose.success.read':          'Leer otras historias',
  'community.compose.success.resources':     'Encontrar recursos de apoyo',

  /* ── Etiquetas CW ── */
  'community.cw.none':             'No se necesita nota de contenido',
  'community.cw.physical':         'Violencia física',
  'community.cw.sexual':           'Violencia sexual o agresión',
  'community.cw.coercive-control': 'Control coercitivo o abuso emocional',
  'community.cw.general':          'General — describiré en mi publicación',
  'community.cw.reveal':           'Mostrar publicación',
  'community.cw.collapse':         'Colapsar',
  'community.cw.badge.physical':   'NC: Violencia física',
  'community.cw.badge.sexual':     'NC: Violencia sexual',
  'community.cw.badge.coercive-control': 'NC: Control coercitivo',
  'community.cw.badge.general':    'NC: Nota de contenido',

  /* ── Etiquetas ── */
  'community.tag.healing':    'sanación',
  'community.tag.leaving':    'salir',
  'community.tag.court':      'judicial',
  'community.tag.family':     'familia',
  'community.tag.lgbtq':      'LGBTQ+',
  'community.tag.recovery':   'recuperación',
  'community.tag.first-week': 'primera semana',
  'community.tag.years-later':'años después',
  'community.tag.housing':    'vivienda',
  'community.tag.children':   'hijos/as',
  'community.tag.financial':  'abuso financiero',
  'community.tag.digital':    'seguridad digital',
  'community.tag.hope':       'esperanza',
  'community.tag.letter':     'carta a mí misma/o',

  /* ── Ordenar y filtrar ── */
  'community.sort.label':     'Ordenar',
  'community.sort.newest':    'Más recientes',
  'community.sort.supported': 'Más apoyados',
  'community.sort.random':    'Aleatorio',
  'community.sort.unanswered':'Sin respuesta',
  'community.filter.tags':    'Filtrar por etiqueta',
  'community.filter.lang':    'Idioma',
  'community.filter.all':     'Todos',
  'community.filter.clear':   'Borrar filtros',
  'community.search.placeholder': 'Buscar publicaciones…',

  /* ── Reacciones ── */
  'community.reaction.hear_you':   'Te escucho',
  'community.reaction.gave_hope':  'Me dio esperanza',
  'community.reaction.solidarity': 'Solidaridad',
  'community.reaction.me_too':     'Yo también',

  /* ── Respuestas ── */
  'community.replies.show':      'Ver respuestas',
  'community.replies.hide':      'Ocultar respuestas',
  'community.replies.count':     '{n} respuestas',
  'community.replies.count.1':   '1 respuesta',
  'community.replies.none':      'Sin respuestas aún. Sé la primera/o en responder.',
  'community.replies.write':     'Escribe una respuesta…',
  'community.replies.submit':    'Publicar respuesta',
  'community.replies.you':       'Tú (autora/or)',
  'community.replies.author':    'Respuesta {n}',
  'community.replies.loading':   'Cargando respuestas…',
  'community.replies.moderation':'Las respuestas se revisan antes de aparecer.',

  /* ── Acciones de publicación ── */
  'community.story.flag':   'Reportar esta publicación',
  'community.story.share':  'Compartir enlace',
  'community.story.listen': 'Escuchar',
  'community.story.saved':  'Guardado',
  'community.story.save':   'Guardar',
  'community.story.back':   '← Volver a todas las publicaciones',

  /* ── Modal de denuncia ── */
  'community.flag.title':       'Reportar esta publicación',
  'community.flag.desc':        'Todas las denuncias son revisadas por una/un moderadora/or. Gracias por ayudar a mantener este espacio seguro.',
  'community.flag.names-a-person': 'Nombra o identifica a una persona específica',
  'community.flag.unsafe-content': 'Contenido inseguro o dañino',
  'community.flag.spam':           'Spam o fuera de tema',
  'community.flag.crisis-needs-help': 'Esta persona puede necesitar apoyo en crisis',
  'community.flag.other':          'Otro',
  'community.flag.submit':      'Enviar denuncia',
  'community.flag.thanks':      'Gracias. Una/un moderadora/or revisará esta publicación.',

  /* ── Publicaciones guardadas ── */
  'community.saved.tab':    'Guardados',
  'community.saved.empty':  'No hay publicaciones guardadas aún. Toca el ícono de marcador en cualquier publicación para guardarla aquí — solo para ti, nunca compartida.',
  'community.saved.note':   'Las publicaciones guardadas se almacenan solo en tu navegador. Desaparecen si limpias los datos del navegador.',

  /* ── Moderación y carga ── */
  'community.loading':         'Cargando…',
  'community.empty':           'Aún no hay publicaciones aquí. Sé la primera/o en compartir.',
  'community.load.more':       'Cargar más',
  'community.moderation.note': 'Las publicaciones se revisan antes de aparecer — generalmente en 24–48 horas.',
  'community.mod.info.title':  'Cómo funciona la moderación',
  'community.mod.info.desc':   'Todas las publicaciones de la Comunidad son revisadas por una/un moderadora/or voluntaria/o antes de aparecer públicamente. Eliminamos publicaciones que nombran a personas específicas, contienen contenido inseguro o violan nuestras pautas comunitarias. La moderación es sobre seguridad, no censura — nunca eliminamos publicaciones simplemente porque un tema es difícil.',

  /* ── Publicación del día (widget principal) ── */
  'community.sotd.heading': 'De la Comunidad',
  'community.sotd.label':   'Voz de la Comunidad',
  'community.sotd.cta':     'Leer más voces →',

  /* ── Flujo de reporte ── */
  'flow.step1.label': 'Antes de comenzar',
  'flow.step2.label': 'Qué ocurrió',
  'flow.step3.label': 'Sobre la persona',
  'flow.step4.label': 'Tu experiencia',
  'flow.step5.label': 'Revisar y enviar',

  /* ── Sección Explorar ── */
  'browse.desc':            'Busca reportes de seguridad enviados por la comunidad por nombre o ubicación. ¿Reconoces a alguien? Confía en tus instintos — investiga por tu cuenta y comparte lo que sabes usando la pestaña Reportar.',
  'browse.source.label':    'Fuente',
  'browse.our-reports':     'Nuestros Reportes',
  'browse.search.label':    'Buscar',
  'browse.filter.label':    'Filtrar',
  'browse.clear':           'Borrar',
  'browse.all-countries':   'Todos los países',
  'browse.all-states':      'Todos los estados',
  'browse.map':             'Ver Mapa',
  'browse.back':            '← Volver a todos los reportes',
  'browse.th.name':         'Nombre',
  'browse.th.location':     'Ubicación',
  'browse.th.categories':   'Categorías',
  'browse.th.actions':      'Acciones',
  'browse.counting':        'Cargando reportes y contando…',
  'browse.count':           'reportes y contando…',
  'browse.loaded':          'Se cargaron {total} reporte(s). Mostrando hasta {per} por página.',
  'browse.showing':         'Mostrando {n} de {total} reporte(s), {per} por página.',
  'browse.none-yet':        'Aún no hay reportes. Sé el primero en enviar uno.',
  'browse.no-match':        'No se encontraron reportes coincidentes.',
  'browse.report-entry':    'Reportar esta entrada',
  'browse.share':           'Compartir',
  'browse.shared-single':   'Mostrando reporte compartido #{id}.',
  'browse.not-found':       'Reporte no encontrado.',
  'browse.not-found-link':  'Reporte no encontrado. <a href="#/browse">Volver a todos los reportes</a>.',
  'browse.copied':          'Enlace copiado al portapapeles',
  'browse.copy-failed':     'No se pudo copiar el enlace',
  'browse.page.first':      'Primero',
  'browse.page.prev':       'Anterior',
  'browse.page.next':       'Siguiente',
  'browse.page.last':       'Último',
  'browse.state-label':     'Estado / Provincia (opcional)',
  'browse.state-select':    'Selecciona un estado (opcional)',
  'browse.state-placeholder': 'Estado / Provincia (opcional)',

  /* ── Sección Reportar ── */
  'submit.desc':             'Comparte una preocupación de seguridad con la comunidad. Todos los reportes son públicos y permanentes. Por favor envía solo reportes honestos y de buena fe.',
  'submit.guided':           'Prueba el flujo de reporte guiado',
  'submit.guided.note':      '— paso a paso, más fácil para primeros envíos',
  'submit.section.person':   'Sobre la persona',
  'submit.section.type':     'Tipo de preocupación',
  'submit.section.verify':   'Verificación',
  'submit.name.label':       'Nombre completo *',
  'submit.name.placeholder': 'Nombre y apellido',
  'submit.city.label':       'Ciudad *',
  'submit.city.placeholder': 'Ciudad donde reside o donde ocurrió el incidente',
  'submit.country.label':    'País *',
  'submit.country.default':  'Selecciona un país',
  'submit.state.label':      'Estado / Provincia (opcional)',
  'submit.state.placeholder':'Estado / Provincia (opcional)',
  'submit.captcha.warning':  'Por favor completa la verificación CAPTCHA.',
  'submit.rate-limit':       'Has alcanzado el límite de 3 envíos en la última hora. Por favor intenta más tarde.',

  /* ── Extras de la Comunidad ── */
  'community.draft.yes':      'Restaurar',
  'community.draft.no':       'Descartar',
  'community.compose.cancel': 'Cancelar',
  'community.captcha.warning':'Por favor completa el CAPTCHA.',
  'community.rate-limit':     'Has alcanzado el límite. Por favor espera antes de enviar otra publicación.',

  /* ── Pie de página ── */
  'footer.resources': 'Recursos',
  'footer.about':     'Acerca de',

  /* ── Cargando ── */
  'loading.reports': 'Cargando reportes…',

  /* ── Modales ── */
  'modal.disclaimer.title': 'Acerca de Estos Reportes',
  'modal.disclaimer.body':  '<p>Todos los reportes en SafeVoice son enviados anónimamente por miembros de la comunidad y no están verificados. Los publicamos porque creemos que las personas tienen el derecho de compartir sus experiencias y advertir a otros — pero no podemos confirmar, investigar ni respaldar ninguna afirmación.</p><p>Trata cada reporte como un punto de partida para tu propia conciencia, no como un hecho verificado.</p>',
  'modal.browse.title':     'Cómo Usar Explorar',
  'modal.browse.body':      '<p>El directorio de exploración contiene reportes de conciencia de seguridad enviados por la comunidad. Puedes buscar por nombre o ubicación, filtrar por país o estado de EE.UU., y explorar un mapa interactivo.</p><p>Cada reporte es enviado por usuarios y no está verificado — úsalo como punto de partida para la conciencia, nunca como un veredicto definitivo sobre nadie.</p>',
  'modal.submit.title':     'Antes de Enviar',
  'modal.submit.body':      '<p>Enviar un reporte agrega el nombre de una persona, su ubicación y la naturaleza de tu preocupación a un directorio público. Por favor asegúrate de que tu reporte sea honesto y enviado de buena fe.</p><p>Eres responsable de lo que envías. Los reportes son permanentes pero la persona afectada puede apelar mediante el proceso de revisión de la plataforma.</p>',
  'modal.categories.title': 'Categorías de Reporte',
  'modal.categories.body':  '<p>Las categorías ayudan a otros a entender rápidamente la naturaleza de la preocupación de seguridad reportada. Puedes seleccionar múltiples categorías que apliquen a tu experiencia.</p><p>Estas son clasificaciones comunitarias amplias usadas para conciencia — no son definiciones legales, y seleccionarlas no constituye una acusación formal.</p>',
  'modal.community.title':  'Voces de la Comunidad',
  'modal.community.body':   '<p>Voces de la Comunidad es un espacio moderado y anónimo para sobrevivientes, aliadas/os y personas solidarias. Está organizado en salas — cada una con su propio propósito y normas — para que puedas encontrar la conversación que se adapte a donde estás ahora mismo.</p>',
  'modal.privacy.title':    'Tu Privacidad',
  'modal.privacy.body':     '<p>SafeVoice está construido desde cero para proteger tu privacidad. Nunca necesitas crear una cuenta, proporcionar un correo electrónico ni iniciar sesión para usar ninguna función.</p><p>Hemos diseñado deliberadamente el sistema para minimizar lo que sabemos sobre ti — porque tu seguridad y anonimato son el objetivo principal.</p>',

  /* ── Modales de información: Recursos — pestañas ── */
  'modal.res.immediate.title':  'Sobre Esta Lista',
  'modal.res.immediate.body':   '<p>Estos seis pasos están basados en orientación de organizaciones de apoyo a sobrevivientes. Están ordenados por urgencia, pero no necesitas completarlos todos de una vez — toma lo que puedas, cuando puedas.</p><ul><li>Ningún paso es obligatorio — no hay una forma correcta o incorrecta de responder a lo que te sucedió.</li><li>Los pasos pueden revisitarse en cualquier momento; tu situación puede cambiar lo que es posible.</li><li>Una línea de crisis puede guiarte a través de cada paso si necesitas apoyo.</li></ul>',
  'modal.res.hotlines.title':   'Sobre Estas Líneas de Crisis',
  'modal.res.hotlines.body':    '<p>Cada línea listada aquí es gratuita, confidencial y atendida por defensoras o consejeras capacitadas. No necesitas estar en peligro inmediato para llamar — apoyan a cualquier persona en crisis.</p><ul><li>Las llamadas desde teléfonos fijos generalmente no aparecen en facturas; las llamadas de celular pueden mostrar el número.</li><li>Opciones de texto y chat están disponibles para quienes no pueden hablar con seguridad por teléfono.</li><li>Puedes preguntar a las defensoras sobre cualquier opción sin comprometerte a ninguna acción.</li></ul>',
  'modal.res.lgbtq.title':      'Sobre Recursos LGBTQ+',
  'modal.res.lgbtq.body':       '<p>Las personas LGBTQ+ sobrevivientes enfrentan barreras únicas al buscar ayuda — incluyendo miedo a ser "out", desconfianza hacia las fuerzas del orden y dificultad para encontrar servicios afirmativos. Estas organizaciones son lideradas por o sirven específicamente a comunidades LGBTQ+.</p><ul><li>Todas las organizaciones listadas afirman las identidades LGBTQ+ y no requieren que divulgues tu identidad.</li><li>Los recursos abarcan líneas de crisis, defensa legal, salud mental y apoyo comunitario.</li><li>Se incluyen recursos en inglés y español donde están disponibles.</li></ul>',
  'modal.res.legal.title':      'Sobre Opciones Legales',
  'modal.res.legal.body':       '<p>Tienes más opciones legales que solo presentar una denuncia policial. Demandas civiles, órdenes de protección, quejas laborales y programas de compensación existen independientemente del proceso penal.</p><ul><li>Muchas protecciones legales pueden accederse sin abogado — existen escritorios de autoayuda en la mayoría de los juzgados.</li><li>Las organizaciones de defensa de víctimas ofrecen orientación legal gratuita y pueden acompañarte a cualquier procedimiento.</li><li>Se incluyen opciones internacionales para Canadá y México en cada sección.</li></ul>',
  'modal.res.healing.title':    'Sobre Recursos de Sanación',
  'modal.res.healing.body':     '<p>La sanación del trauma no es lineal y no tiene un plazo. Estos recursos cubren una amplia gama de enfoques — terapia, comunidad, movimiento, lectura y herramientas digitales — para que puedas encontrar lo que se adapta a donde estás ahora mismo.</p><ul><li>Ningún enfoque funciona para todas las personas; probar diferentes opciones es normal y alentado.</li><li>Muchos recursos son gratuitos o de bajo costo, incluidos terapeutas con escala de precios y comunidades de pares.</li><li>Se incluyen recursos en español en cada sección.</li></ul>',
  'modal.res.safety.title':     'Sobre la Planificación de Seguridad',
  'modal.res.safety.body':      '<p>Un plan de seguridad es una preparación personalizada para mantenerte más segura en una situación peligrosa o potencialmente peligrosa. Crear uno — aunque sea parcialmente — puede hacer una diferencia real en una emergencia.</p><ul><li>Nada de lo que escribas en este formulario se guarda, transmite ni almacena en ningún lugar.</li><li>Una defensora de violencia doméstica puede ayudarte a construir un plan más detallado para tu situación específica.</li><li>Puedes imprimir o guardar este plan como PDF usando tu navegador.</li></ul>',
  'modal.res.platform.title':   'Sobre Esta Página',
  'modal.res.platform.body':    '<p>Esta sección explica cómo funciona SafeVoice técnicamente y qué sucede con los datos que envías. La transparencia sobre nuestras prácticas es fundamental para la confianza que esta plataforma requiere.</p><ul><li>Todo el código fuente es público — puedes leer cada línea en github.com/namehim/namehim.</li><li>No ocurre recopilación de datos oculta; lo que ves en tu navegador es todo lo que existe.</li><li>La plataforma puede ser bifurcada y autoalojada por cualquiera que quiera ejecutar su propia instancia.</li></ul>',

  /* ── Modales: pasos de lista inmediata ── */
  'modal.step.safety.title':    'Por Qué: Ponerse a Salvo Primero',
  'modal.step.safety.body':     '<p>Tu seguridad física es la prioridad más importante. Si aún estás en una situación peligrosa, nada más puede ocurrir efectivamente hasta que estés segura. Incluso moverse a otra habitación o a la casa de un vecino puede reducir significativamente el riesgo inmediato.</p><ul><li>Llama al 911 (o número de emergencias local) si estás en peligro inmediato.</li><li>Una línea de violencia doméstica puede ayudarte a crear un plan de salida si salir se siente difícil o inseguro.</li><li>La planificación de seguridad — incluso mental — aumenta tus posibilidades de salir con seguridad.</li></ul>',
  'modal.step.preserve.title':  'Por Qué: Preservar Evidencia Física',
  'modal.step.preserve.body':   '<p>La evidencia forense de una agresión sexual puede recolectarse hasta 120 horas (5 días) después del incidente. Esta evidencia puede ser crucial para acciones legales — incluso si aún no estás segura de si quieres denunciar.</p><ul><li>Puedes hacerte un examen SANE (Enfermera Examinadora de Agresión Sexual) sin presentar una denuncia policial.</li><li>Si ya te duchaste, los proveedores médicos aún pueden documentar otras lesiones.</li><li>Guarda la ropa en una bolsa de papel (no plástico) si es posible — el plástico atrapa la humedad y degrada la evidencia.</li></ul>',
  'modal.step.medical.title':   'Por Qué: Buscar Atención Médica',
  'modal.step.medical.body':    '<p>Un examen médico sirve múltiples propósitos más allá de las lesiones visibles. Puede documentar evidencia, hacer pruebas de ETS, proporcionar anticoncepción de emergencia y conectarte con defensoras en el lugar.</p><ul><li>Puedes solicitar un examen SANE en la mayoría de las salas de emergencias de hospitales.</li><li>Los proveedores médicos están obligados a atenderte independientemente de si presentas una denuncia policial.</li><li>Tu seguro médico puede facturarse, pero la mayoría de las áreas tienen fondos de asistencia a víctimas para cubrir costos.</li></ul>',
  'modal.step.tell.title':      'Por Qué: Contarle a Alguien de Confianza',
  'modal.step.tell.body':       '<p>Divulgar a una persona de confianza — una amiga, familiar o consejera — puede romper el aislamiento que crea el trauma. También crea una testigo que puede apoyarte en entornos legales o médicos futuros.</p><ul><li>Tú controlas qué compartes y con quién — no hay obligación de compartir cada detalle.</li><li>Si una persona de confianza responde mal, eso no es un reflejo de ti ni de lo que sucedió.</li><li>Una línea de crisis proporciona una persona sin juicios con quien hablar si nadie en tu vida se siente seguro ahora mismo.</li></ul>',
  'modal.step.document.title':  'Por Qué: Documentar Evidencia',
  'modal.step.document.body':   '<p>Los registros escritos y digitales creados poco después de un incidente son mucho más creíbles que los creados después. La documentación te protege tanto si decides tomar acción legal ahora como en el futuro.</p><ul><li>Escribe lo que sucedió con el mayor detalle posible — hora, lugar, qué se dijo, quién estuvo presente.</li><li>Toma capturas de pantalla de cualquier comunicación digital (mensajes, correos, redes sociales) y almacénalas en múltiples lugares.</li><li>Envíate los registros por correo electrónico o a una persona de confianza para tener una copia con marca de tiempo fuera de tu dispositivo.</li></ul>',
  'modal.step.hotline.title':   'Por Qué: Contactar una Línea de Crisis',
  'modal.step.hotline.body':    '<p>Las defensoras de crisis están capacitadas específicamente para apoyar a sobrevivientes. Pueden guiarte a través de tus opciones, ayudarte a decidir qué hacer a continuación y conectarte con servicios locales — sin presionarte a tomar ninguna decisión.</p><ul><li>No necesitas estar en crisis inmediata para llamar; ayudan a cualquiera que haya experimentado abuso o agresión.</li><li>Las llamadas son confidenciales y no te obligan a denunciar a la policía.</li><li>Las opciones de chat y texto están disponibles si llamar se siente inseguro o difícil.</li></ul>',

  /* ── Modales: encabezados de grupos de líneas de ayuda ── */
  'modal.hl.us.title':          'Líneas de Crisis en EEUU',
  'modal.hl.us.body':           '<p>Estas líneas nacionales de EEUU son gratuitas, confidenciales y disponibles 24/7. Cada línea se especializa en un tipo específico de crisis o comunidad.</p><ul><li>RAINN te conecta con un proveedor local de servicios de agresión sexual además del apoyo nacional.</li><li>The National DV Hotline tiene chat en vivo disponible en thehotline.org si llamar no es seguro.</li><li>988 sirve a cualquier persona en crisis emocional — no solo a quienes están en crisis suicida.</li></ul>',
  'modal.hl.lgbtq.title':       'Líneas de Crisis LGBTQ+',
  'modal.hl.lgbtq.body':        '<p>Estas líneas están atendidas por personas que comprenden las barreras específicas que enfrentan los sobrevivientes LGBTQ+, incluyendo el miedo a ser "out" y la desconfianza hacia los servicios principales.</p><ul><li>Trans Lifeline está atendida exclusivamente por operadores transgénero — para personas trans y no binarias.</li><li>The Trevor Project ofrece apoyo en crisis específicamente para jóvenes LGBTQ+ menores de 25 años.</li><li>Todas las líneas mantienen confidencialidad y no comparten información sin consentimiento.</li></ul>',
  'modal.hl.ca.title':          'Líneas de Crisis en Canadá',
  'modal.hl.ca.body':           '<p>Las líneas de crisis canadienses operan bajo leyes provinciales y federales de privacidad que protegen tu confidencialidad. Los servicios están disponibles en inglés y francés.</p><ul><li>Assaulted Women\'s Helpline está disponible en 154 idiomas con apoyo de intérprete.</li><li>Kids Help Phone sirve a jóvenes en toda Canadá con opciones de chat y texto.</li><li>Los servicios provinciales 211 pueden conectarte con refugios locales, ayuda legal y programas de apoyo.</li></ul>',
  'modal.hl.mx.title':          'Líneas de Crisis en México',
  'modal.hl.mx.body':           '<p>Estas líneas ofrecen apoyo confidencial y gratuito para personas en México que han experimentado violencia, abuso o crisis emocional. La atención está disponible en español las 24 horas.</p><ul><li>INMUJERES Línea de la Mujer está disponible las 24 horas, los 7 días de la semana — gratuita desde cualquier teléfono.</li><li>SAPTEL ofrece apoyo psicológico por teléfono sin necesidad de dar tu nombre.</li><li>CNDH puede orientarte sobre tus derechos y las instituciones de tu región.</li></ul>',

  /* ── Modales: subsecciones LGBTQ+ ── */
  'modal.lgbtq.us.title':       'Organizaciones LGBTQ+ en EEUU',
  'modal.lgbtq.us.body':        '<p>Estas organizaciones brindan defensa, recursos legales, educación y apoyo comunitario para personas LGBTQ+ en los Estados Unidos.</p><ul><li>Lambda Legal ofrece asistencia legal gratuita y guías de Conoce Tus Derechos para personas LGBTQ+ que enfrentan discriminación.</li><li>PFLAG tiene capítulos locales en la mayoría de las ciudades de EEUU que brindan apoyo en persona.</li><li>NCTE es el recurso líder para derechos legales y protecciones específicas para personas trans.</li></ul>',
  'modal.lgbtq.ca.title':       'Organizaciones LGBTQ+ en Canadá',
  'modal.lgbtq.ca.body':        '<p>Estas organizaciones canadienses brindan defensa de derechos, recursos de salud y apoyo comunitario para personas LGBTQ+ en todo el país.</p><ul><li>Egale Canada tiene recursos de políticas y programas contra la violencia a nivel nacional.</li><li>Rainbow Health Ontario proporciona un directorio de proveedores de atención médica afirmativos.</li><li>Las comisiones de derechos humanos provinciales manejan quejas por discriminación — todas las provincias tienen protecciones basadas en orientación sexual e identidad de género.</li></ul>',
  'modal.lgbtq.mx.title':       'Organizaciones LGBTQ+ en México',
  'modal.lgbtq.mx.body':        '<p>Estas organizaciones brindan apoyo, defensa de derechos y recursos comunitarios para personas LGBTQ+ en México.</p><ul><li>Letra S tiene amplia experiencia en derechos sexuales y documentación de violencia contra personas LGBTQ+.</li><li>Cuenta Conmigo ofrece grupos de apoyo y talleres para personas LGBTQ+ y sus familias.</li><li>CONAPRED recibe denuncias formales por discriminación basada en orientación sexual e identidad de género.</li></ul>',
  'modal.lgbtq.survivors.title':'Para Sobrevivientes LGBTQ+',
  'modal.lgbtq.survivors.body': '<p>Las personas LGBTQ+ sobrevivientes de abuso enfrentan barreras que los servicios generales pueden no abordar, incluyendo ser "out" durante procedimientos legales o refugios que no sirven su identidad de género.</p><ul><li>FORGE proporciona recursos específicamente para sobrevivientes transgénero y de género no conforme de violencia sexual.</li><li>The Network / La Red tiene una línea directa y refugio específicamente para comunidades LGBTQ+ y poliamorosas.</li><li>AVP mantiene una coalición nacional de programas locales contra la violencia LGBTQ+ con apoyo en crisis y planificación de seguridad.</li></ul>',
  'modal.lgbtq.mh.title':       'Salud Mental Afirmativa LGBTQ+',
  'modal.lgbtq.mh.body':        '<p>Encontrar una terapeuta que verdaderamente afirme tu identidad puede marcar una diferencia significativa en el proceso de sanación.</p><ul><li>Therapy Den permite filtrar por identidad LGBTQ+, especialización en trauma y honorarios en escala móvil.</li><li>NQTTCN se enfoca específicamente en terapeutas queer y trans de color, priorizando atención interseccional.</li><li>Open Path Collective ofrece sesiones a $30–$80 — muy por debajo de las tarifas típicas del mercado.</li></ul>',
  'modal.lgbtq.community.title':'Espacios Comunitarios en Línea',
  'modal.lgbtq.community.body': '<p>Las comunidades en línea pueden brindar conexión, validación y apoyo práctico de personas que verdaderamente comprenden tu experiencia — disponibles en cualquier momento, sin barreras geográficas.</p><ul><li>TrevorSpace está moderado específicamente para jóvenes LGBTQ+ (de 13 a 24 años).</li><li>Comunidades de Reddit como r/LGBTsurvivor están moderadas por pares y pueden conectarte con miles de sobrevivientes.</li><li>Rainbow Railroad brinda asistencia de emergencia para personas LGBTQ+ que escapan de violencia o persecución.</li></ul>',

  /* ── Modales: elementos del acordeón legal ── */
  'modal.legal.ro.title':       'Órdenes de Protección',
  'modal.legal.ro.body':        '<p>Una orden de protección es una orden judicial que prohíbe legalmente a un agresor contactarte o acercarse a ti. Las órdenes de emergencia a menudo pueden emitirse el mismo día en tu juzgado local, sin abogado.</p><ul><li>Violar una orden de protección es un delito penal — el agresor puede ser arrestado de inmediato.</li><li>Disponible para violencia doméstica, agresión sexual, acoso y hostigamiento.</li><li>Canadá y México tienen mecanismos equivalentes disponibles a través de los juzgados locales.</li></ul>',
  'modal.legal.le.title':       'Denunciar a las Autoridades',
  'modal.legal.le.body':        '<p>Denunciar a la policía es completamente tu decisión. Una defensora de víctimas puede ayudarte a evaluar tus opciones antes y durante cualquier interacción con las fuerzas del orden.</p><ul><li>Puedes hacerte un examen SANE (forense) sin presentar una denuncia policial, preservando la opción de denunciar más tarde.</li><li>Los plazos de prescripción varían ampliamente — contacta una organización de ayuda legal para conocer tu plazo antes de decidir.</li><li>Si tu denuncia no es tomada en serio, una organización de defensa de víctimas puede ayudarte a escalar o presentar una queja formal.</li></ul>',
  'modal.legal.civil.title':    'Demanda Civil',
  'modal.legal.civil.body':     '<p>Una demanda civil te permite buscar daños y perjuicios económicos del agresor independientemente de cualquier caso penal. El estándar de prueba es menor que en el tribunal penal.</p><ul><li>Los daños pueden incluir costos médicos, gastos de terapia, salarios perdidos y dolor y sufrimiento.</li><li>Muchos abogados que se especializan en casos civiles de agresión sexual trabajan en contingencia — sin costo inicial para ti.</li><li>Las provincias canadienses tienen períodos de prescripción extendidos para reclamos de abuso infantil.</li></ul>',
  'modal.legal.eeoc.title':     'Protecciones Laborales',
  'modal.legal.eeoc.body':      '<p>El acoso sexual y la agresión en el lugar de trabajo pueden activar protecciones federales. Presentar una queja es gratuito y no requiere abogado.</p><ul><li>Por lo general, debes presentar dentro de los 180 o 300 días del incidente — el plazo varía según el estado.</li><li>La represalia por denunciar el acoso también es ilegal — se puede presentar una queja separada si ocurre represalia.</li><li>Canadá tiene protecciones equivalentes a través de los códigos de derechos humanos provinciales y el Código Laboral de Canadá.</li></ul>',
  'modal.legal.titleix.title':  'Título IX (Escuelas)',
  'modal.legal.titleix.body':   '<p>El Título IX requiere que cualquier institución educativa que reciba fondos federales aborde la mala conducta sexual. Las escuelas deben tener un coordinador de Título IX y un proceso de queja formal.</p><ul><li>Puedes presentar directamente ante la Oficina de Derechos Civiles del Departamento de Educación de EEUU si la escuela no responde adecuadamente.</li><li>El Título IX proporciona medidas de apoyo — como órdenes de no contacto y cambios de clase — independientemente del resultado disciplinario.</li><li>RAINN mantiene una guía dedicada al Título IX en rainn.org/title-ix con información por estado.</li></ul>',
  'modal.legal.comp.title':     'Programas de Compensación para Víctimas',
  'modal.legal.comp.body':      '<p>Cada estado de EEUU y provincia canadiense opera un fondo para ayudar a las víctimas de crímenes a pagar los gastos resultantes del delito. Por lo general no se requiere condena — solo que el crimen fue denunciado.</p><ul><li>Los gastos cubiertos generalmente incluyen atención médica, terapia, salarios perdidos y costos de reubicación.</li><li>Las sobrevivientes de agresión sexual en muchos estados pueden acceder a fondos sin una denuncia policial — verifica los requisitos de tu estado.</li><li>La Asociación Nacional de Juntas de Compensación para Víctimas de Crímenes (nacvcb.org) tiene un directorio de todos los programas estatales.</li></ul>',
  'modal.legal.free.title':     'Ayuda Legal Gratuita',
  'modal.legal.free.body':      '<p>No necesitas pagar un abogado para obtener ayuda legal. Las organizaciones de ayuda legal, los programas de defensa de víctimas y las clínicas de escuelas de derecho brindan asistencia legal gratuita o de muy bajo costo a sobrevivientes.</p><ul><li>legalaid.org y lawhelp.org tienen directorios buscables de ayuda legal gratuita por estado de EEUU.</li><li>WomensLaw.org proporciona información legal gratuita en línea y una función de chat atendida por defensoras capacitadas.</li><li>Los servicios legales conscientes de inmigración existen en la mayoría de las grandes ciudades — las personas indocumentadas tienen derechos legales y pueden acceder a ayuda de manera confidencial.</li></ul>',

  /* ── Modales: elementos del acordeón de sanación ── */
  'modal.heal.therapist.title':    'Encontrar una Terapeuta',
  'modal.heal.therapist.body':     '<p>Las terapeutas especializadas en trauma usan enfoques basados en evidencia que son significativamente más efectivos para la recuperación que el asesoramiento general.</p><ul><li>Busca específicamente terapeutas capacitadas en EMDR, TPC (Terapia de Procesamiento Cognitivo) o terapia somática — todos tienen sólida evidencia para la recuperación del trauma.</li><li>Muchas terapeutas ofrecen honorarios en escala móvil basados en los ingresos — siempre pregunta.</li><li>Open Path Collective (openpathcollective.org) te conecta con sesiones a $30–$80 — muy por debajo de las tarifas típicas.</li></ul>',
  'modal.heal.communities.title':  'Comunidades de Apoyo en Línea',
  'modal.heal.communities.body':   '<p>Las comunidades de pares de sobrevivientes ofrecen algo que la terapia a veces no puede: la comprensión vivida de personas que han pasado por experiencias similares.</p><ul><li>After Silence (aftersilence.org) es un foro privado moderado específicamente para sobrevivientes de agresión sexual.</li><li>Los Grupos de Apoyo en Línea de RAINN brindan grupos anónimos y gratuitos facilitados para sobrevivientes de todas las edades.</li><li>Las comunidades de Reddit como r/survivorsofabuse y r/CPTSD tienen cientos de miles de miembros y disponibilidad 24/7.</li></ul>',
  'modal.heal.social.title':       'Comunidades en Redes Sociales',
  'modal.heal.social.body':        '<p>Las comunidades de sobrevivientes en redes sociales pueden brindar validación, solidaridad y un sentido de que no estás sola — a cualquier hora, desde cualquier lugar.</p><ul><li>#MeToo y #SurvivorX en X/Twitter conectan a millones de sobrevivientes que comparten experiencias y recursos.</li><li>Cuentas de Instagram como @rainn, @survivorsalliance y @nedratawwab comparten estrategias de afrontamiento y defensa.</li><li>Los grupos privados de Facebook brindan apoyo de pares más íntimo con moderación — busca "grupo de apoyo para sobrevivientes de agresión sexual."</li></ul>',
  'modal.heal.podcasts.title':     'Pódcasts para Sobrevivientes',
  'modal.heal.podcasts.body':      '<p>Los pódcasts te permiten acceder al contenido de recuperación del trauma en tu propio horario, en privado — sin cita, sin costo y sin expectativa de participar.</p><ul><li>"Podemos con Esto" (Glennon Doyle, doblado al español) y "Desbloqueándonos" (Brené Brown) abordan el trauma y la resiliencia de manera accesible.</li><li>"The Trauma Therapist Podcast" presenta a especialistas líderes explicando la recuperación del trauma en términos prácticos y no clínicos.</li><li>Los recursos de trauma en español están disponibles en Spotify y Apple Podcasts — busca "sobrevivir al trauma."</li></ul>',
  'modal.heal.books.title':        'Libros para la Recuperación',
  'modal.heal.books.body':         '<p>Leer sobre el trauma puede normalizar tu experiencia, proporcionar marcos para entender lo que sucedió y sugerir herramientas prácticas para sanar — a tu propio ritmo.</p><ul><li>"El Cuerpo Lleva la Cuenta" de Bessel van der Kolk es el texto fundamental sobre cómo el trauma vive en el cuerpo y cómo sanarlo.</li><li>"Trauma y Recuperación" de Judith Herman sigue siendo la obra pionera sobre la recuperación de la violencia interpersonal.</li><li>"¿Por Qué lo Hace?" de Lundy Bancroft es lectura esencial para sobrevivientes de abuso emocional y físico por parte de parejas.</li></ul>',
  'modal.heal.apps.title':         'Aplicaciones de Sanación y Anclaje',
  'modal.heal.apps.body':          '<p>Las aplicaciones móviles pueden proporcionar herramientas de anclaje inmediatas, meditaciones guiadas y apoyo de salud mental — particularmente útiles durante momentos difíciles entre sesiones de terapia.</p><ul><li>Insight Timer (gratuito) tiene miles de meditaciones incluyendo programas específicos para trauma por terapeutas con licencia.</li><li>Sanvello (nivel gratuito) proporciona herramientas basadas en TCC específicamente para ansiedad, depresión y trauma.</li><li>EMDR Coach ofrece ejercicios EMDR guiados para uso personal entre sesiones de terapia.</li></ul>',
  'modal.heal.somatic.title':      'Sanación Corporal y Somática',
  'modal.heal.somatic.body':       '<p>El trauma se almacena en el cuerpo tanto como en la mente. Los enfoques somáticos y corporales trabajan directamente con el sistema nervioso, llegando a menudo a donde la terapia de conversación no puede.</p><ul><li>El yoga sensible al trauma está específicamente adaptado para sobrevivientes — diferente del yoga regular en su enfoque en autonomía y seguridad.</li><li>La Experiencia Somática aborda las respuestas de trauma almacenadas en el cuerpo; encuentra practicantes certificados en traumahealing.org.</li><li>Incluso el movimiento simple — caminar, estirarse, bailar — ayuda a regular el sistema nervioso y siempre es accesible.</li></ul>',
  'modal.heal.supporting.title':   'Apoyar a Alguien Más',
  'modal.heal.supporting.body':    '<p>Apoyar a un sobreviviente requiere centrar sus necesidades y su cronología, no tu propia incomodidad o deseo de arreglar la situación. Lo más importante es creerles.</p><ul><li>Pregunta "¿qué necesitas ahora mismo?" en lugar de ofrecer soluciones — los sobrevivientes a menudo necesitan ser escuchados antes de ser ayudados.</li><li>Evita preguntas como "¿por qué no te fuiste?" o "¿estás segura?" — estas desplazan la responsabilidad al sobreviviente.</li><li>El trauma secundario es real — busca apoyo para ti misma a través de un consejero o grupo de apoyo si lo que un sobreviviente comparte contigo te afecta profundamente.</li></ul>',

  /* ── Modales: pasos del flujo de reporte ── */
  'modal.flow.start.title':     'Antes de Empezar',
  'modal.flow.start.body':      '<p>El flujo guiado está diseñado para ayudarte a enviar un reporte de seguridad reflexivo y completo a tu propio ritmo. Entender algunas cosas primero te ayudará a usarlo de manera efectiva.</p><ul><li>Los reportes son públicos y permanentes — no pueden ser eliminados por ti después del envío, pero el sujeto puede solicitar una revisión.</li><li>Puedes detenerte y volver más tarde; tu navegador no retiene datos de formulario parciales entre sesiones.</li><li>Si necesitas apoyo emocional antes de enviar, la página de Recursos tiene líneas de crisis disponibles 24/7.</li></ul>',
  'modal.flow.what.title':      'Qué Sucedió — Categorías',
  'modal.flow.what.body':       '<p>Las categorías ayudan a la comunidad a entender rápidamente la naturaleza de tu preocupación de seguridad. Son clasificaciones amplias de concientización — no definiciones legales — y pueden aplicarse múltiples categorías a una sola experiencia.</p><ul><li>Selecciona cada categoría que aplique; no estás limitada a una.</li><li>Estas categorías se usan solo para filtrado y concientización — no desencadenan ningún proceso legal.</li><li>Si ninguna categoría describe completamente tu experiencia, elige la más cercana y usa el campo de descripción para agregar contexto.</li></ul>',
  'modal.flow.who.title':       'Sobre la Persona',
  'modal.flow.who.body':        '<p>Este paso recopila la información mínima necesaria para crear un registro útil de seguridad comunitaria. Solo se aceptan letras A–Z en los campos de nombre y ubicación para proteger la privacidad del remitente.</p><ul><li>Usa el nombre comúnmente conocido de la persona — el que la mayoría reconocería.</li><li>La ciudad debe reflejar dónde vive la persona o dónde ocurrió el incidente, ya que esto ayuda a otras personas en esa área.</li><li>El estado/provincia es opcional pero hace que las búsquedas basadas en ubicación sean significativamente más útiles.</li></ul>',
  'modal.flow.exp.title':       'Tu Experiencia',
  'modal.flow.exp.body':        '<p>El campo de descripción te permite proporcionar contexto más allá de las etiquetas de categoría. Es opcional — un reporte sin descripción sigue siendo válido y se publica — pero la especificidad ayuda a otros a entender la naturaleza de la preocupación.</p><ul><li>Incluye fechas aproximadas, describe comportamientos específicos (no solo etiquetas como "abusivo"), y anota cualquier patrón.</li><li>No incluyas tu propia información identificadora — tu nombre, dirección o lugar de trabajo.</li><li>La descripción es públicamente visible junto con el reporte — escribe solo lo que estés cómoda compartiendo abiertamente.</li></ul>',
  'modal.flow.review.title':    'Revisar y Enviar',
  'modal.flow.review.body':     '<p>Esta es tu última oportunidad de revisar todo antes de que tu reporte se convierta en parte del registro público. Lee cada campo cuidadosamente antes de hacer clic en Enviar.</p><ul><li>Una vez enviados, los reportes no pueden ser editados ni eliminados por ti — solo el proceso de revisión de la plataforma puede eliminarlos.</li><li>Se requiere un CAPTCHA para prevenir el spam; no está vinculado a tu identidad.</li><li>Después de enviar, puedes navegar el listado de reportes en vivo o visitar la página de Recursos para obtener apoyo.</li></ul>',

  /* ── Modales: secciones de la página Acerca de ── */
  'modal.about.what.title':     'Qué es SafeVoice',
  'modal.about.what.body':      '<p>SafeVoice es una herramienta de concientización de código abierto impulsada por la comunidad para compartir preocupaciones de seguridad sobre individuos. No es un tribunal, no es una herramienta de fuerzas del orden y no es un lugar para acusaciones legales — es un espacio para la concientización comunitaria.</p><ul><li>Los reportes son enviados de forma anónima por miembros de la comunidad y no son verificados por la plataforma.</li><li>La plataforma da la bienvenida a personas de todos los géneros, orientaciones y orígenes — se pueden enviar reportes sobre cualquier persona.</li><li>Todo el código es de acceso público para revisión, asegurando transparencia sobre cómo opera la plataforma.</li></ul>',
  'modal.about.name.title':     'El Nombre Original',
  'modal.about.name.body':      '<p>La plataforma fue bifurcada de un proyecto llamado "NameHim," un nombre elegido deliberadamente para abordar una realidad estadística medible sobre quién comete el abuso. El nombre ha evolucionado a SafeVoice para reflejar mejor la misión inclusiva.</p><ul><li>Más del 98% de los crímenes violentos son cometidos por hombres — el nombre original señalaba un patrón, no un juicio universal.</li><li>Nada impide a nadie enviar reportes sobre personas de cualquier género; la plataforma trata todos los reportes de la misma manera.</li><li>El nombre SafeVoice refleja la misión: proporcionar un espacio seguro para que cualquiera pueda hablar.</li></ul>',
  'modal.about.use.title':      'Cómo Usar Este Sitio',
  'modal.about.use.body':       '<p>Cada reporte en SafeVoice es generado por usuarios y no está verificado. La plataforma los publica porque la concientización comunitaria tiene valor — pero nunca deben tratarse como hechos verificados o veredictos definitivos.</p><ul><li>Trata un reporte como un punto de partida para tu propia concientización e investigación, no como una declaración definitiva sobre alguien.</li><li>No tomes decisiones de empleo, vivienda o relaciones basándote únicamente en un reporte no verificado.</li><li>Si tienes serias preocupaciones de seguridad, contacta a las fuerzas del orden — este sitio no es un sustituto de los canales oficiales.</li></ul>',
  'modal.about.legal.title':    'Aviso Legal y de Seguridad',
  'modal.about.legal.body':     '<p>SafeVoice es una plataforma de concientización comunitaria, no un sistema legal. No puede reemplazar a las fuerzas del orden, los tribunales, las órdenes de protección o el asesoramiento de seguridad profesional.</p><ul><li>Si alguien está en peligro inmediato, llama al 911 o a tu número de emergencias local — no dependas de este sitio.</li><li>Para acusaciones graves, ve a la policía — un reporte de SafeVoice no es un sustituto de una denuncia penal.</li><li>La página de Recursos tiene líneas directas, ayuda legal y contactos de defensa de víctimas para cualquiera que necesite apoyo real.</li></ul>',
  'modal.about.oss.title':      'Código Abierto y Transparencia',
  'modal.about.oss.body':       '<p>SafeVoice es completamente de código abierto. Cada línea de código es auditable públicamente, y el conjunto de datos moderado en vivo es descargable. Esta transparencia es fundamental para la confianza que la plataforma requiere.</p><ul><li>El código fuente completo está en github.com/namehim/namehim — cualquiera puede leerlo, bifurcarlo o mejorarlo.</li><li>El conjunto de datos moderado en vivo está disponible en api.namehim.app/filtered-reports — actualizado cada 30 segundos.</li><li>Cualquiera puede ejecutar su propia instancia de SafeVoice — la plataforma está diseñada para sobrevivir a cualquier punto único de falla.</li></ul>',
  'modal.about.privacy.title':  'Privacidad y Recopilación de Datos',
  'modal.about.privacy.body':   '<p>SafeVoice está deliberadamente diseñado para recopilar casi nada sobre ti. Tu anonimato es central para cómo funciona la plataforma — no es una ocurrencia tardía.</p><ul><li>No se requieren cuentas, correos electrónicos ni contraseñas para ninguna función; no se almacenan direcciones IP de forma permanente.</li><li>Solo se almacena localmente un ID de navegador anónimo aleatorio (para límites de velocidad) — no puede identificarte y puede borrarse en cualquier momento.</li><li>Lo que ves en la página es todo lo que existe — no hay recopilación de datos oculta ni seguimiento.</li></ul>',
  'modal.about.build.title':    'Construye el Tuyo',
  'modal.about.build.body':     '<p>La plataforma está explícitamente diseñada para ser bifurcada y autoalojada por cualquiera que se preocupe por esta misión. Ninguna organización individual la controla, y el código puede sobrevivir a cualquier sitio individual que se caiga.</p><ul><li>Bifurca el repositorio de GitHub e impleméntalo en cualquier proveedor de alojamiento — la configuración solo requiere Node.js y una instancia de Supabase.</li><li>El conjunto de datos en vivo es descargable, por lo que cualquier bifurcación puede comenzar con datos comunitarios reales.</li><li>Las contribuciones, informes de errores y mejoras siempre son bienvenidos en el repositorio de GitHub.</li></ul>',
  'modal.about.why.title':      'Por Qué Existe',
  'modal.about.why.body':       '<p>El sitio original se cayó a los pocos días de lanzarse. La necesidad que estaba llenando — un espacio para la concientización de seguridad comunitaria — no desapareció. SafeVoice es un intento de mantener esa puerta abierta de una forma más sostenible, transparente e inclusiva.</p><ul><li>Las personas tienen derecho a compartir sus experiencias de seguridad y advertir a otros en su comunidad.</li><li>Ninguna plataforma existente sirve adecuadamente esta necesidad específica de una manera que centre la seguridad y privacidad del sobreviviente.</li><li>La plataforma está diseñada para ser resiliente — de código abierto, bifurcable y no dependiente de ninguna persona para sobrevivir.</li></ul>',

  /* ── Página Acerca de — cuerpo ── */
  'about.what.p':      'SafeVoice es una herramienta de conciencia de código abierto impulsada por la comunidad. No es un lugar para hacer acusaciones legales. Es simplemente un lugar para que las personas digan: "Esta persona me generó preocupaciones de estas maneras específicas." Es un espacio abierto a personas de todos los géneros, orientaciones sexuales y orígenes.',
  'about.name.p1':     'Esta plataforma fue bifurcada de un proyecto llamado "NameHim" — un nombre elegido con propósito. Más del 98% de los crímenes violentos son cometidos por hombres. La gran mayoría de las agresiones sexuales, el acoso y otras formas de abuso son perpetradas por hombres. Esto no se trata de culpar a cada hombre; se trata de nombrar un problema real, medible y sistémico en nuestra sociedad.',
  'about.name.p2':     'Nada impide a las personas agregar nombres de personas abusadoras de cualquier género. Cualquiera es libre de hacerlo. Pero el nombre original señalaba el patrón, no la excepción. Hemos evolucionado el nombre a SafeVoice para reflejar nuestro compromiso de ser un espacio completamente inclusivo y acogedor — para mujeres, personas LGBTQ+ y todos los demás que necesiten un lugar seguro para hablar.',
  'about.use.p':       'Todo en este sitio es generado por usuarios y no está verificado. No investigamos, confirmamos ni respaldamos ninguna afirmación. Si encuentras un nombre aquí, trátalo como punto de partida — alguien de quien estar consciente, sobre quien investigar por tu cuenta. No se trata de demonizar a nadie permanentemente. Es una señal: sé consciente y verifica por ti misma/o.',
  'about.legal.p':     'Este sitio no reemplaza a las fuerzas del orden, los tribunales ni el asesoramiento profesional. Si crees que alguien está en peligro inmediato, llama al 911 (o tu número de emergencias local). Para acusaciones graves, acude a la policía — no solo a este sitio web. Consulta nuestra <a href="resources.html">página de Recursos</a> para líneas de crisis, opciones legales y apoyo.',
  'about.oss.p1':      'Todo este proyecto es de código abierto. Puedes leer cada línea de código, sugerir mejoras o reportar problemas en nuestro repositorio de GitHub: <a href="https://github.com/namehim/namehim" rel="noopener noreferrer">github.com/namehim/namehim</a>',
  'about.oss.p2':      'Si quieres bifurcar este proyecto o ejecutar tu propia versión, puedes descargar el conjunto de datos moderado en vivo en: <a href="https://api.namehim.app/filtered-reports" rel="noopener noreferrer">api.namehim.app/filtered-reports</a>. Los datos se actualizan cada 30 segundos y excluyen entradas eliminadas por moderación.',
  'about.privacy.intro': 'Recopilamos casi nada. Tu privacidad es fundamental para cómo funciona SafeVoice.',
  'about.privacy.li1': '<strong>Sin cuentas, sin correos, sin contraseñas.</strong> Nunca te registras ni inicias sesión.',
  'about.privacy.li2': '<strong>No se guardan direcciones IP.</strong> Se realiza una verificación temporal de IP solo para límites de velocidad — nunca se guarda y expira en 60 segundos.',
  'about.privacy.li3': '<strong>Sin cookies de rastreo.</strong> Solo almacenamos un ID anónimo aleatorio en localStorage para hacer cumplir los límites de velocidad (máx. 3 reportes por hora). Este ID no puede identificarte.',
  'about.privacy.li4': '<strong>Lo que ves en las herramientas de desarrollador del navegador es la misma información que se muestra en la página</strong> — nombre, ubicación, categoría, marca de tiempo. Ningún dato oculto puede re-identificar a quienes envían reportes.',
  'about.privacy.li5': 'El campo <code>submitter_uuid</code> en la API sin procesar es un identificador aleatorio de un solo uso. No puede vincularse a tu identidad real. Puedes borrarlo en cualquier momento limpiando el almacenamiento de tu navegador.',
  'about.privacy.footer': 'En resumen: no sabemos quién eres, y no queremos saberlo. Tu seguridad y anonimato son el objetivo principal.',
  'about.build.p':     'Animamos a cualquier persona que se preocupe por esta misión a bifurcar este código, mejorarlo y ejecutar su propia versión. Si algo le ocurre alguna vez a este sitio, el trabajo puede continuar en manos de cualquiera que quiera llevarlo adelante. Esto nunca debería ser controlado por una sola persona u organización.',
  'about.why.p':       'El sitio original cayó a los pocos días de su lanzamiento. Las personas aún necesitan un espacio para compartir preocupaciones de forma anónima y responsable, sin miedo. Este es un intento de mantener esa puerta abierta — mejorado y mantenido con el tiempo. Las sugerencias siempre son bienvenidas.',

  /* ── Flujo guiado de reporte ── */
  'flow.exit.btn':             'Salir rápido',
  'flow.btn.continue':         'Continuar',
  'flow.btn.back':             'Atrás',
  'flow.btn.edit':             'Editar',
  'flow.btn.review':           'Revisar',
  'flow.btn.submit':           'Enviar Reporte',
  'flow.step1.title':          'Antes de comenzar',
  'flow.step1.subtitle':       'Por favor lee esto con atención. SafeVoice es una herramienta pública de conciencia de seguridad comunitaria. Lo que envíes será visible para todos.',
  'flow.step1.card1':          '<strong>Los reportes son permanentes.</strong> Una vez enviado, tu reporte es públicamente visible y no puede ser eliminado por ti. La persona afectada puede apelar mediante el proceso de revisión de la plataforma.',
  'flow.step1.card2':          '<strong>La honestidad es obligatoria.</strong> Envía solo reportes basados en experiencias genuinas. Los reportes falsos socavan la seguridad comunitaria y pueden exponerte a responsabilidad legal.',
  'flow.step1.card3':          '<strong>Tu anonimato está protegido.</strong> No se guarda ninguna cuenta, correo electrónico ni dirección IP. Se requiere un CAPTCHA para prevenir spam — no está vinculado a tu identidad.',
  'flow.step1.card4':          '<strong>¿Necesitas apoyo primero?</strong> Si estás en crisis o necesitas orientación, visita <a href="resources.html#/hotlines">nuestra página de recursos</a> antes de enviar. Personas capacitadas pueden ayudarte a decidir qué hacer.',
  'flow.step1.consent':        'Entiendo que este reporte será públicamente visible y permanente, y lo estoy enviando de buena fe basado en mi experiencia genuina.',
  'flow.step1.std-form':       'Usar el formulario estándar en su lugar',
  'flow.step2.title':          '¿Qué ocurrió?',
  'flow.step2.subtitle':       'Selecciona todas las categorías que apliquen a tu experiencia. Puedes elegir múltiples. Estas son clasificaciones de conciencia comunitaria, no definiciones legales.',
  'flow.step2.count':          '{n} seleccionadas',
  'flow.step2.error':          'Por favor selecciona al menos una categoría.',
  'flow.step3.title':          'Sobre la persona',
  'flow.step3.subtitle':       'Ingresa el nombre y la ubicación de la persona. Solo se aceptan letras A–Z para proteger la privacidad. Todos los campos con * son obligatorios.',
  'flow.step3.name.label':     'Nombre completo *',
  'flow.step3.name.placeholder': 'Nombre y apellido',
  'flow.step3.name.error':     'El nombre es obligatorio (solo letras, 2–20 caracteres).',
  'flow.step3.city.label':     'Ciudad *',
  'flow.step3.city.placeholder': 'Ciudad donde reside o donde ocurrió el incidente',
  'flow.step3.city.error':     'La ciudad es obligatoria (solo letras).',
  'flow.step3.country.label':  'País *',
  'flow.step3.country.default':'Selecciona un país',
  'flow.step3.country.error':  'Por favor selecciona un país.',
  'flow.step3.state.label':    'Estado / Provincia (opcional)',
  'flow.step3.state.placeholder': 'Estado o provincia (opcional)',
  'flow.step4.title':          'Tu experiencia',
  'flow.step4.subtitle':       'Describe lo que ocurrió con tus propias palabras. Sé específica/o pero evita incluir información que te identifique. Este campo es opcional pero ayuda a la comunidad a entender la naturaleza de tu preocupación.',
  'flow.step4.desc.label':     'Descripción (opcional, máx. 1000 caracteres)',
  'flow.step4.desc.placeholder': 'Describe lo que ocurrió. Puedes incluir fechas, contexto y la naturaleza del comportamiento. No incluyas tu propia información identificatoria.',
  'flow.step4.tips.title':     'Consejos para un reporte útil:',
  'flow.step4.tips.text':      'Incluye fechas aproximadas, describe comportamientos específicos (no solo "fue abusivo"), y menciona cualquier patrón. Evita nombres de otras personas que no sean el sujeto del reporte.',
  'flow.step5.title':          'Revisar y Enviar',
  'flow.step5.subtitle':       'Por favor revisa tu reporte cuidadosamente antes de enviarlo. Una vez enviado, no puede ser cambiado ni eliminado por ti.',
  'flow.step5.captcha.warning':'Por favor completa el CAPTCHA.',
  'flow.step5.rate-limit':     'Has alcanzado el límite de 3 envíos en la última hora. Por favor intenta más tarde.',
  'flow.review.name':          'Nombre',
  'flow.review.location':      'Ubicación',
  'flow.review.categories':    'Categorías',
  'flow.review.description':   'Descripción',
  'flow.review.not-provided':  '(no proporcionado)',
  'flow.review.no-desc':       'Sin descripción proporcionada',
  'flow.success.title':        'Reporte enviado',
  'flow.success.desc':         'Gracias por contribuir a la seguridad comunitaria. Tu reporte ahora es públicamente visible en el listado de exploración.',
  'flow.success.browse':       'Explorar reportes',
  'flow.success.resources':    'Recursos y apoyo',

  /* ── Recursos: pestaña inmediata (formato de progreso) ── */
  'immediate.progress.fmt':    '{n} de 6 pasos completados',

  /* ── Recursos: etiquetas de sección LGBTQ+ ── */
  'lgbtq.section.us':        'Organizaciones y Defensa (Estados Unidos)',
  'lgbtq.section.ca':        'Organizaciones y Defensa (Canadá)',
  'lgbtq.section.mx':        'Organizaciones (México)',
  'lgbtq.section.survivors': 'Para Sobrevivientes LGBTQ+ de Abuso',
  'lgbtq.section.mental':    'Salud Mental Afirmativa LGBTQ+',
  'lgbtq.section.community': 'Comunidad y Espacios en Línea',

  /* ── Recursos: títulos de acordeones ── */
  'platform.acc.submit':      'Enviar un Reporte',
  'platform.acc.privacy':     'Tu Privacidad y Anonimato',
  'platform.acc.moderation':  'Moderación y Denuncias',
  'platform.acc.appeal':      'Apelar un Reporte Sobre Ti',
  'platform.acc.oss':         'Código abierto',
  'healing.acc.therapist':    'Encontrar un/a Terapeuta',
  'healing.acc.communities':  'Comunidades y Grupos de Apoyo en Línea',
  'healing.acc.social':       'Redes Sociales y Comunidades de Hashtag',
  'healing.acc.podcasts':     'Podcasts para Sobrevivientes',
  'healing.acc.books':        'Libros y Lectura',
  'healing.acc.apps':         'Apps para Sanar y Centrarte',
  'healing.acc.somatic':      'Sanación Somática y Corporal',
  'healing.acc.supporting':   'Apoyar a Otra Persona',
  'legal.acc.protective':     'Órdenes de Protección y Alejamiento',
  'legal.acc.reporting':      'Denunciar a las Autoridades',
  'legal.acc.civil':          'Demanda Civil',
  'legal.acc.eeoc':           'Protecciones Laborales (EEOC / Título VII)',
  'legal.acc.titleix':        'Título IX (Escuelas y Universidades)',
  'legal.acc.compensation':   'Programas de Compensación a Víctimas',
  'legal.acc.freelegal':      'Ayuda Legal Gratuita',
}

}; // end TRANSLATIONS

/* ── Language detection ── */
function svDetectLanguage() {
  var saved = localStorage.getItem('sv_lang');
  if (saved === 'en' || saved === 'es') return saved;
  var nav = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  return nav.startsWith('es') ? 'es' : 'en';
}

/* ── Apply all data-i18n translations to the page ── */
function svApplyTranslations(lang) {
  var dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];

  /* Text content */
  document.querySelectorAll('[data-i18n]').forEach(function(el) {
    var key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  /* HTML content (for rich elements) */
  document.querySelectorAll('[data-i18n-html]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-html');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  /* Placeholders */
  document.querySelectorAll('[data-i18n-placeholder]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (dict[key] !== undefined) {
      el.placeholder = dict[key];
    }
  });

  /* aria-labels */
  document.querySelectorAll('[data-i18n-label]').forEach(function(el) {
    var key = el.getAttribute('data-i18n-label');
    if (dict[key] !== undefined) {
      el.setAttribute('aria-label', dict[key]);
    }
  });

  /* Page-level */
  document.documentElement.lang = lang;
  localStorage.setItem('sv_lang', lang);

  /* Update toggle button */
  var btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = dict['nav.lang'] || (lang === 'es' ? 'EN' : 'ES');
    btn.setAttribute('aria-label', lang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    btn.setAttribute('lang', lang === 'es' ? 'en' : 'es');
  }
}

/* ── Toggle between languages ── */
function svToggleLanguage() {
  var current = svDetectLanguage();
  var next = current === 'es' ? 'en' : 'es';
  svApplyTranslations(next);
}

/* ── Get a single translated string by key ── */
function svT(key) {
  var lang = svDetectLanguage();
  var dict = TRANSLATIONS[lang] || TRANSLATIONS['en'];
  if (dict[key] !== undefined) return dict[key];
  var en = TRANSLATIONS['en'];
  if (en[key] !== undefined) return en[key];
  return key;
}

/* ── Auto-init on DOMContentLoaded ── */
(function() {
  function init() { svApplyTranslations(svDetectLanguage()); }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
