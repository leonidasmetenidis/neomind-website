// Legal documents (Privacy Policy and Terms of Service) for both languages.
// The privacy/ and terms/ pages render their body from here via renderLegal()
// in main.js, so the full text lives in one place and stays in sync across EN
// and DE. Each section's body is an HTML string (paragraphs and lists); the
// surrounding markup and styling come from the .legal__doc rules in styles.css.
window.LEGAL_CONTENT = {
  privacy: {
    meta: {
      updated: {
        en: 'Last updated: 22 June 2026 · Effective date: 22 June 2026',
        de: 'Zuletzt aktualisiert: 22. Juni 2026 · Gültig ab: 22. Juni 2026',
      },
      note: {
        en: 'This Privacy Policy is drafted to align with the EU General Data Protection Regulation (GDPR), the German Federal Data Protection Act (BDSG), and the German Telecommunications Digital Services Data Protection Act (TDDDG). Some sections describe third-party services that may not be active yet. Services that require your consent (in particular analytics and advertising) are only used after you have given consent, which can be withdrawn at any time.',
        de: 'Diese Datenschutzerklärung ist darauf ausgerichtet, im Einklang mit der EU-Datenschutz-Grundverordnung (DSGVO), dem Bundesdatenschutzgesetz (BDSG) und dem Telekommunikation-Digitale-Dienste-Datenschutz-Gesetz (TDDDG) zu stehen. Einige Abschnitte beschreiben Dienste von Drittanbietern, die möglicherweise noch nicht aktiv sind. Dienste, die deine Einwilligung erfordern (insbesondere Analyse und Werbung), werden erst eingesetzt, nachdem du eingewilligt hast; die Einwilligung kann jederzeit widerrufen werden.',
      },
    },
    sections: [
      {
        en: {
          head: '1. Controller and Contact',
          body: `<p>The controller responsible for the processing of your personal data within the meaning of Article 4(7) GDPR is:</p>
<p>Leonidas Metenidis<br>Business designation: Neomind<br>Saligstraße 10, 63069 Offenbach am Main, Germany<br><br>Email: <a href="mailto:neomind.help@gmail.com">neomind.help@gmail.com</a><br>Website: <a href="https://getneomind.com">https://getneomind.com</a></p>
<p>For any questions or requests regarding data protection, please contact us at neomind.help@gmail.com.</p>
<p>We have not appointed a Data Protection Officer, as we are not legally required to do so. This does not affect your right to contact us directly at any time regarding data protection matters.</p>`,
        },
        de: {
          head: '1. Verantwortlicher und Kontakt',
          body: `<p>Verantwortlicher für die Verarbeitung deiner personenbezogenen Daten im Sinne von Art. 4 Abs. 7 DSGVO ist:</p>
<p>Leonidas Metenidis<br>Geschäftsbezeichnung: Neomind<br>Saligstraße 10, 63069 Offenbach am Main, Deutschland<br><br>E-Mail: <a href="mailto:neomind.help@gmail.com">neomind.help@gmail.com</a><br>Website: <a href="https://getneomind.com">https://getneomind.com</a></p>
<p>Bei Fragen oder Anliegen zum Datenschutz kannst du uns jederzeit unter neomind.help@gmail.com erreichen.</p>
<p>Wir haben keinen Datenschutzbeauftragten benannt, da wir gesetzlich nicht dazu verpflichtet sind. Dein Recht, dich in Datenschutzangelegenheiten jederzeit direkt an uns zu wenden, bleibt davon unberührt.</p>`,
        },
      },
      {
        en: {
          head: '2. Scope of this Policy',
          body: `<p>This Privacy Policy explains how we collect, use, share, store, and protect personal data when you use the Neomind mobile application and related services (the "Service"). It applies to all users of the Service, regardless of the device or platform used.</p>
<p>Where we integrate or link to third-party services, those providers may process data under their own privacy policies, to which we refer where relevant. This Policy does not cover the data practices of third parties that we do not control, including the operators of the Apple App Store and Google Play Store in respect of their own platforms.</p>`,
        },
        de: {
          head: '2. Geltungsbereich dieser Erklärung',
          body: `<p>Diese Datenschutzerklärung erläutert, wie wir personenbezogene Daten erheben, nutzen, weitergeben, speichern und schützen, wenn du die mobile Neomind-Anwendung und die damit verbundenen Dienste (den „Dienst") nutzt. Sie gilt für alle Nutzerinnen und Nutzer des Dienstes, unabhängig vom verwendeten Gerät oder von der verwendeten Plattform.</p>
<p>Soweit wir Dienste Dritter einbinden oder auf sie verlinken, können diese Anbieter Daten nach ihren eigenen Datenschutzerklärungen verarbeiten, auf die wir an den jeweils relevanten Stellen verweisen. Diese Erklärung erfasst nicht die Datenpraktiken von Dritten, die wir nicht kontrollieren, einschließlich der Betreiber des Apple App Store und des Google Play Store im Hinblick auf deren eigene Plattformen.</p>`,
        },
      },
      {
        en: {
          head: '3. Definitions',
          body: `<p>For clarity, the key terms used in this Policy have the meaning given in Art. 4 GDPR. In particular:</p>
<ul>
<li><strong>"Personal data"</strong> means any information relating to an identified or identifiable natural person.</li>
<li><strong>"Processing"</strong> means any operation performed on personal data, such as collection, storage, use, disclosure, or erasure.</li>
<li><strong>"Controller"</strong> means the party that determines the purposes and means of processing (here: us, see Section 1).</li>
<li><strong>"Processor"</strong> means a party that processes personal data on behalf of the controller (for example, our hosting provider).</li>
<li><strong>"Third country"</strong> means a country outside the European Economic Area (EEA).</li>
<li><strong>"User-generated content"</strong> means content you create, record, or upload through the Service.</li>
</ul>`,
        },
        de: {
          head: '3. Begriffsbestimmungen',
          body: `<p>Zur Klarstellung haben die in dieser Erklärung verwendeten Schlüsselbegriffe die in Art. 4 DSGVO festgelegte Bedeutung. Insbesondere:</p>
<ul>
<li><strong>„Personenbezogene Daten"</strong> bezeichnen alle Informationen, die sich auf eine identifizierte oder identifizierbare natürliche Person beziehen.</li>
<li><strong>„Verarbeitung"</strong> bezeichnet jeden mit personenbezogenen Daten ausgeführten Vorgang wie Erhebung, Speicherung, Nutzung, Offenlegung oder Löschung.</li>
<li><strong>„Verantwortlicher"</strong> bezeichnet die Stelle, die über die Zwecke und Mittel der Verarbeitung entscheidet (hier: wir, siehe Abschnitt 1).</li>
<li><strong>„Auftragsverarbeiter"</strong> bezeichnet eine Stelle, die personenbezogene Daten im Auftrag des Verantwortlichen verarbeitet (zum Beispiel unser Hosting-Anbieter).</li>
<li><strong>„Drittland"</strong> bezeichnet ein Land außerhalb des Europäischen Wirtschaftsraums (EWR).</li>
<li><strong>„Nutzergenerierte Inhalte"</strong> bezeichnen Inhalte, die du über den Dienst erstellst, aufnimmst oder hochlädst.</li>
</ul>`,
        },
      },
      {
        en: {
          head: '4. Principles We Follow',
          body: `<p>We process personal data in accordance with the principles of Art. 5 GDPR: lawfulness, fairness, and transparency; purpose limitation; data minimisation; accuracy; storage limitation; integrity and confidentiality; and accountability. We only collect data that we need to provide and improve the Service, and we limit access to those who need it.</p>`,
        },
        de: {
          head: '4. Grundsätze, die wir befolgen',
          body: `<p>Wir verarbeiten personenbezogene Daten im Einklang mit den Grundsätzen des Art. 5 DSGVO: Rechtmäßigkeit, Verarbeitung nach Treu und Glauben und Transparenz; Zweckbindung; Datenminimierung; Richtigkeit; Speicherbegrenzung; Integrität und Vertraulichkeit sowie Rechenschaftspflicht. Wir erheben nur Daten, die wir zur Bereitstellung und Verbesserung des Dienstes benötigen, und beschränken den Zugriff auf diejenigen, die ihn benötigen.</p>`,
        },
      },
      {
        en: {
          head: '5. Categories of Personal Data We Process',
          body: `<p>Depending on how you use the Service, we process the following categories of personal data:</p>
<p><strong>5.1 Account and profile data</strong></p>
<ul>
<li>Email address (for email registration)</li>
<li>Authentication identifiers when you sign in with Apple or Google (e.g. a provider user identifier and, depending on your choice, your name or a private relay email address)</li>
<li>Account settings and preferences (e.g. language, theme, selected voice, reminder settings, subscription/access tier)</li>
</ul>
<p><strong>5.2 User-generated content</strong></p>
<ul>
<li>Content you create or upload, such as custom affirmations and visualizations, categories and sets, vision board items, recorded audio, uploaded images, videos, and background music</li>
<li>Favourites and other personalisation choices</li>
</ul>
<p><strong>5.3 AI generation data</strong></p>
<ul>
<li>The prompts, instructions, and input text you provide to generate content with the AI feature, together with the generated output</li>
<li>Counters and timestamps relating to your monthly AI generation usage</li>
</ul>
<p><strong>5.4 Subscription and purchase data</strong></p>
<ul>
<li>Subscription status and entitlements (e.g. trial, active, cancelled, expired, never subscribed)</li>
<li>Purchase and renewal events and identifiers provided to us by the App Stores and our subscription provider</li>
<li>Note: Payment card and billing details are processed by Apple and Google, not by us (see Sections 9.4 and 13)</li>
</ul>
<p><strong>5.5 Device and technical data</strong></p>
<ul>
<li>Technical information necessary to operate the app and connect to our backend (e.g. device model and operating-system information, app version, language and region settings, the IP address used to establish the connection, and timestamps of requests)</li>
<li>Push/notification tokens where remote notifications are used (currently reminders are scheduled locally on your device; see Section 12)</li>
</ul>
<p><strong>5.6 Optional analytics and advertising data (only with your consent)</strong></p>
<ul>
<li>Usage and event data, interaction patterns, approximate analytics or advertising identifiers, and similar information processed by analytics and advertising tools, if and to the extent you have consented (see Sections 10 and 11)</li>
</ul>
<p><strong>5.7 Communications and support data</strong></p>
<ul>
<li>The content of messages you send us (e.g. support emails) and the email address you use, together with any information you choose to include</li>
</ul>
<p><strong>5.8 Device permission data</strong></p>
<ul>
<li>Microphone input (only while you record voice affirmations)</li>
<li>Photo library and media library access (only when you select images to add, or save images/visualizations to your device)</li>
</ul>
<p>These permissions are used solely to provide the requested feature. Content you choose to upload becomes User-generated content (Section 5.2). We do not access your microphone, photos, or media library in the background.</p>
<p>We do not intentionally collect special categories of personal data (Art. 9 GDPR). Please avoid including sensitive information (for example, about health, religion, or sexual orientation) in free-text affirmations or other content if you do not wish to process it through the Service.</p>`,
        },
        de: {
          head: '5. Kategorien personenbezogener Daten, die wir verarbeiten',
          body: `<p>Je nachdem, wie du den Dienst nutzt, verarbeiten wir die folgenden Kategorien personenbezogener Daten:</p>
<p><strong>5.1 Konto- und Profildaten</strong></p>
<ul>
<li>E-Mail-Adresse (bei Registrierung per E-Mail)</li>
<li>Authentifizierungskennungen, wenn du dich mit Apple oder Google anmeldest (z. B. eine Nutzerkennung des Anbieters und, je nach deiner Wahl, dein Name oder eine private Relay-E-Mail-Adresse)</li>
<li>Kontoeinstellungen und Präferenzen (z. B. Sprache, Design, ausgewählte Stimme, Erinnerungseinstellungen, Abonnement-/Zugangsstufe)</li>
</ul>
<p><strong>5.2 Nutzergenerierte Inhalte</strong></p>
<ul>
<li>Inhalte, die du erstellst oder hochlädst, etwa eigene Affirmationen und Visualisierungen, Kategorien und Sets, Vision-Board-Elemente, aufgenommene Audiodateien, hochgeladene Bilder, Videos und Hintergrundmusik</li>
<li>Favoriten und andere Personalisierungsentscheidungen</li>
</ul>
<p><strong>5.3 Daten zur KI-Generierung</strong></p>
<ul>
<li>Die Eingaben, Anweisungen und Texte, die du zur Erstellung von Inhalten mit der KI-Funktion bereitstellst, zusammen mit dem generierten Ergebnis</li>
<li>Zähler und Zeitstempel zu deiner monatlichen Nutzung der KI-Generierung</li>
</ul>
<p><strong>5.4 Abonnement- und Kaufdaten</strong></p>
<ul>
<li>Abonnementstatus und Berechtigungen (z. B. Testphase, aktiv, gekündigt, abgelaufen, nie abonniert)</li>
<li>Kauf- und Verlängerungsereignisse sowie Kennungen, die uns von den App Stores und unserem Abonnement-Anbieter bereitgestellt werden</li>
<li>Hinweis: Zahlungskarten- und Abrechnungsdaten werden von Apple und Google verarbeitet, nicht von uns (siehe Abschnitte 9.4 und 13)</li>
</ul>
<p><strong>5.5 Geräte- und technische Daten</strong></p>
<ul>
<li>Technische Informationen, die zum Betrieb der App und zur Verbindung mit unserem Backend erforderlich sind (z. B. Gerätemodell und Informationen zum Betriebssystem, App-Version, Sprach- und Regionseinstellungen, die zur Verbindungsherstellung verwendete IP-Adresse und Zeitstempel von Anfragen)</li>
<li>Push-/Benachrichtigungs-Tokens, sofern Remote-Benachrichtigungen genutzt werden (derzeit werden Erinnerungen lokal auf deinem Gerät geplant; siehe Abschnitt 12)</li>
</ul>
<p><strong>5.6 Optionale Analyse- und Werbedaten (nur mit deiner Einwilligung)</strong></p>
<ul>
<li>Nutzungs- und Ereignisdaten, Interaktionsmuster, ungefähre Analyse- oder Werbekennungen und ähnliche Informationen, die von Analyse- und Werbe-Tools verarbeitet werden, sofern und soweit du eingewilligt hast (siehe Abschnitte 10 und 11)</li>
</ul>
<p><strong>5.7 Kommunikations- und Supportdaten</strong></p>
<ul>
<li>Der Inhalt von Nachrichten, die du uns sendest (z. B. Support-E-Mails), und die von dir verwendete E-Mail-Adresse, zusammen mit allen Informationen, die du angeben möchtest</li>
</ul>
<p><strong>5.8 Daten aus Geräteberechtigungen</strong></p>
<ul>
<li>Mikrofoneingabe (nur während du Sprach-Affirmationen aufnimmst)</li>
<li>Zugriff auf die Fotomediathek und Medienbibliothek (nur wenn du Bilder zum Hinzufügen auswählst oder Bilder/Visualisierungen auf deinem Gerät speicherst)</li>
</ul>
<p>Diese Berechtigungen werden ausschließlich zur Bereitstellung der angeforderten Funktion verwendet. Inhalte, die du hochlädst, werden zu nutzergenerierten Inhalten (Abschnitt 5.2). Wir greifen nicht im Hintergrund auf dein Mikrofon, deine Fotos oder deine Medienbibliothek zu.</p>
<p>Wir erheben nicht absichtlich besondere Kategorien personenbezogener Daten (Art. 9 DSGVO). Bitte vermeide es, sensible Informationen (zum Beispiel über Gesundheit, Religion oder sexuelle Orientierung) in Freitext-Affirmationen oder anderen Inhalten anzugeben, wenn du sie nicht über den Dienst verarbeiten lassen möchtest.</p>`,
        },
      },
      {
        en: {
          head: '6. Sources of Data',
          body: `<p>We receive data primarily:</p>
<ul>
<li>directly from you, when you register, configure settings, create or upload content, use AI features, or contact us;</li>
<li>from the App Stores and our subscription provider, regarding your subscription status and purchase events; and</li>
<li>from Apple or Google, when you choose to sign in using those providers (limited authentication data, see Section 13).</li>
</ul>`,
        },
        de: {
          head: '6. Datenquellen',
          body: `<p>Wir erhalten Daten in erster Linie:</p>
<ul>
<li>direkt von dir, wenn du dich registrierst, Einstellungen vornimmst, Inhalte erstellst oder hochlädst, KI-Funktionen nutzt oder uns kontaktierst;</li>
<li>von den App Stores und unserem Abonnement-Anbieter, hinsichtlich deines Abonnementstatus und deiner Kaufereignisse; und</li>
<li>von Apple oder Google, wenn du dich für die Anmeldung über diese Anbieter entscheidest (begrenzte Authentifizierungsdaten, siehe Abschnitt 13).</li>
</ul>`,
        },
      },
      {
        en: {
          head: '7. Purposes and Legal Bases of Processing',
          body: `<p>We process personal data for the following purposes and on the following legal bases under Art. 6(1) GDPR. Section 8 describes the individual activities in more detail.</p>
<ul>
<li><strong>(a) Providing the Service and your account</strong> — Legal basis: performance of a contract, Art. 6(1)(b) GDPR.</li>
<li><strong>(b) AI content generation requested by you</strong> — Legal basis: performance of a contract, Art. 6(1)(b) GDPR.</li>
<li><strong>(c) Subscriptions, trials, and access management</strong> — Legal basis: performance of a contract, Art. 6(1)(b) GDPR; compliance with legal obligations, Art. 6(1)(c) GDPR.</li>
<li><strong>(d) Transactional and service communications</strong> — Legal basis: performance of a contract, Art. 6(1)(b) GDPR; our legitimate interest in communicating with you, Art. 6(1)(f) GDPR.</li>
<li><strong>(e) Security, stability, and abuse prevention</strong> — Legal basis: our legitimate interest in a secure and functioning service, Art. 6(1)(f) GDPR.</li>
<li><strong>(f) Analytics and advertising</strong> — Legal basis: your consent, Art. 6(1)(a) GDPR, and § 25(1) TDDDG for the storage of or access to information on your device.</li>
<li><strong>(g) Marketing emails (where offered)</strong> — Legal basis: your consent, Art. 6(1)(a) GDPR.</li>
<li><strong>(h) Legal compliance and defence of claims</strong> — Legal basis: legal obligation, Art. 6(1)(c) GDPR; legitimate interest, Art. 6(1)(f) GDPR.</li>
</ul>
<p>Where we rely on legitimate interests (Art. 6(1)(f) GDPR), our legitimate interest is the secure, reliable, and efficient operation and improvement of the Service and the protection of our rights. You may object to such processing as described in Section 17.</p>`,
        },
        de: {
          head: '7. Zwecke und Rechtsgrundlagen der Verarbeitung',
          body: `<p>Wir verarbeiten personenbezogene Daten zu den folgenden Zwecken und auf den folgenden Rechtsgrundlagen nach Art. 6 Abs. 1 DSGVO. Abschnitt 8 beschreibt die einzelnen Tätigkeiten ausführlicher.</p>
<ul>
<li><strong>(a) Bereitstellung des Dienstes und deines Kontos</strong> — Rechtsgrundlage: Vertragserfüllung, Art. 6 Abs. 1 lit. b DSGVO.</li>
<li><strong>(b) Von dir angeforderte KI-Inhaltserstellung</strong> — Rechtsgrundlage: Vertragserfüllung, Art. 6 Abs. 1 lit. b DSGVO.</li>
<li><strong>(c) Abonnements, Testphasen und Zugangsverwaltung</strong> — Rechtsgrundlage: Vertragserfüllung, Art. 6 Abs. 1 lit. b DSGVO; Erfüllung rechtlicher Verpflichtungen, Art. 6 Abs. 1 lit. c DSGVO.</li>
<li><strong>(d) Transaktions- und Servicekommunikation</strong> — Rechtsgrundlage: Vertragserfüllung, Art. 6 Abs. 1 lit. b DSGVO; unser berechtigtes Interesse an der Kommunikation mit dir, Art. 6 Abs. 1 lit. f DSGVO.</li>
<li><strong>(e) Sicherheit, Stabilität und Missbrauchsverhinderung</strong> — Rechtsgrundlage: unser berechtigtes Interesse an einem sicheren und funktionierenden Dienst, Art. 6 Abs. 1 lit. f DSGVO.</li>
<li><strong>(f) Analyse und Werbung</strong> — Rechtsgrundlage: deine Einwilligung, Art. 6 Abs. 1 lit. a DSGVO, und § 25 Abs. 1 TDDDG für das Speichern von oder den Zugriff auf Informationen auf deinem Gerät.</li>
<li><strong>(g) Marketing-E-Mails (sofern angeboten)</strong> — Rechtsgrundlage: deine Einwilligung, Art. 6 Abs. 1 lit. a DSGVO.</li>
<li><strong>(h) Rechtliche Compliance und Verteidigung von Ansprüchen</strong> — Rechtsgrundlage: rechtliche Verpflichtung, Art. 6 Abs. 1 lit. c DSGVO; berechtigtes Interesse, Art. 6 Abs. 1 lit. f DSGVO.</li>
</ul>
<p>Soweit wir uns auf berechtigte Interessen stützen (Art. 6 Abs. 1 lit. f DSGVO), ist unser berechtigtes Interesse der sichere, zuverlässige und effiziente Betrieb sowie die Verbesserung des Dienstes und der Schutz unserer Rechte. Du kannst einer solchen Verarbeitung wie in Abschnitt 17 beschrieben widersprechen.</p>`,
        },
      },
      {
        en: {
          head: '8. Detailed Description of Processing Activities',
          body: `<p><strong>8.1 Registration and authentication</strong><br>When you create an account, we process your email address or your Apple/Google authentication identifier to create and secure your account, to authenticate you on each sign-in, and to associate your content and settings with your account. Without this data, we cannot provide an account-based service. Legal basis: Art. 6(1)(b) GDPR.</p>
<p><strong>8.2 Providing app functionality and storing content</strong><br>We store your settings and your User-generated content in our backend so that they are available across sessions and devices. User data is protected by access controls and row-level security so that it is scoped to your account. Legal basis: Art. 6(1)(b) GDPR.</p>
<p><strong>8.3 AI content generation</strong><br>When you use the AI feature, the input you provide is transmitted through our backend to our AI provider (Anthropic) to generate the requested content, which is returned to you and stored with your content. We also maintain usage counters to enforce monthly generation limits associated with your access tier. Legal basis: Art. 6(1)(b) GDPR. See Section 9.2 for details on the provider and Section 14 for international transfers.</p>
<p><strong>8.4 Subscriptions and entitlements</strong><br>We process your subscription status and related identifiers, provided by the App Stores and our subscription provider, to grant the correct access tier, manage trials and renewals, and restore purchases. Payment processing is carried out by Apple and Google. Legal basis: Art. 6(1)(b) and (c) GDPR.</p>
<p><strong>8.5 Communications</strong><br>When you contact us by email, we process your message and contact details to handle your request. Service-related emails (for example, security or account notices) are sent via our email provider. Legal basis: Art. 6(1)(b) and (f) GDPR.</p>
<p><strong>8.6 Security and operation</strong><br>We process technical and connection data to operate, secure, and troubleshoot the Service, to prevent and detect misuse and fraud, and to ensure stability. Legal basis: Art. 6(1)(f) GDPR.</p>
<p><strong>8.7 Analytics and advertising (only with consent)</strong><br>Subject to your consent, we and the providers listed in Section 11 process usage and event data to understand how the Service is used, improve it, and measure marketing campaigns. These tools are not loaded before you consent. Legal basis: Art. 6(1)(a) GDPR and § 25(1) TDDDG.</p>`,
        },
        de: {
          head: '8. Ausführliche Beschreibung der Verarbeitungstätigkeiten',
          body: `<p><strong>8.1 Registrierung und Authentifizierung</strong><br>Wenn du ein Konto erstellst, verarbeiten wir deine E-Mail-Adresse oder deine Apple-/Google-Authentifizierungskennung, um dein Konto zu erstellen und zu sichern, dich bei jeder Anmeldung zu authentifizieren und deine Inhalte und Einstellungen deinem Konto zuzuordnen. Ohne diese Daten können wir keinen kontobasierten Dienst bereitstellen. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
<p><strong>8.2 Bereitstellung der App-Funktionen und Speicherung von Inhalten</strong><br>Wir speichern deine Einstellungen und deine nutzergenerierten Inhalte in unserem Backend, damit sie sitzungs- und geräteübergreifend verfügbar sind. Nutzerdaten werden durch Zugriffskontrollen und Row-Level-Security geschützt, sodass sie auf dein Konto beschränkt sind. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>
<p><strong>8.3 KI-Inhaltserstellung</strong><br>Wenn du die KI-Funktion nutzt, werden deine Eingaben über unser Backend an unseren KI-Anbieter (Anthropic) übermittelt, um die angeforderten Inhalte zu erzeugen, die dir zurückgegeben und mit deinen Inhalten gespeichert werden. Außerdem führen wir Nutzungszähler, um die monatlichen Generierungslimits deiner Zugangsstufe durchzusetzen. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Einzelheiten zum Anbieter findest du in Abschnitt 9.2 und zu internationalen Übermittlungen in Abschnitt 14.</p>
<p><strong>8.4 Abonnements und Berechtigungen</strong><br>Wir verarbeiten deinen Abonnementstatus und zugehörige Kennungen, die uns von den App Stores und unserem Abonnement-Anbieter bereitgestellt werden, um die richtige Zugangsstufe zu gewähren, Testphasen und Verlängerungen zu verwalten und Käufe wiederherzustellen. Die Zahlungsabwicklung erfolgt durch Apple und Google. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und c DSGVO.</p>
<p><strong>8.5 Kommunikation</strong><br>Wenn du uns per E-Mail kontaktierst, verarbeiten wir deine Nachricht und Kontaktdaten, um dein Anliegen zu bearbeiten. Servicebezogene E-Mails (zum Beispiel Sicherheits- oder Kontohinweise) werden über unseren E-Mail-Anbieter versendet. Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO.</p>
<p><strong>8.6 Sicherheit und Betrieb</strong><br>Wir verarbeiten technische und Verbindungsdaten, um den Dienst zu betreiben, zu sichern und Störungen zu beheben, Missbrauch und Betrug zu verhindern und zu erkennen und Stabilität zu gewährleisten. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.</p>
<p><strong>8.7 Analyse und Werbung (nur mit Einwilligung)</strong><br>Vorbehaltlich deiner Einwilligung verarbeiten wir und die in Abschnitt 11 aufgeführten Anbieter Nutzungs- und Ereignisdaten, um zu verstehen, wie der Dienst genutzt wird, ihn zu verbessern und Marketingkampagnen zu messen. Diese Tools werden nicht geladen, bevor du einwilligst. Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG.</p>`,
        },
      },
      {
        en: {
          head: '9. Third-Party Service Providers (Detailed)',
          body: `<p>To operate the Service, we use carefully selected service providers. Where they process personal data on our behalf, we conclude data processing agreements with them in accordance with Art. 28 GDPR. We do not sell your personal data. The following describes each provider, the data involved, and the safeguards.</p>
<p><strong>9.1 Supabase — backend hosting, authentication, database, and storage</strong><br>Data processed: account data, settings, User-generated content, AI input and output, subscription status, and technical/connection data. Purpose: hosting our application backend; authenticating users; storing the database and uploaded files (images, audio, video, music). Legal basis: Art. 6(1)(b) GDPR (and Art. 6(1)(f) for security/operation). Location: hosted on Amazon Web Services (AWS) infrastructure in the United States (US East, Northern Virginia region). This is a transfer to a third country (see Section 14). Relationship: processor under Art. 28 GDPR.</p>
<p><strong>9.2 Anthropic — AI content generation</strong><br>Data processed: the prompt and input text you submit for generation, and the generated output. Purpose: generating affirmations and visualizations based on your input, accessed server-side through our backend. Legal basis: Art. 6(1)(b) GDPR. Location: may process data in the United States (see Section 14). Relationship: processor under Art. 28 GDPR. We use the provider's API and do not permit the use of your input to train its general models beyond what is contractually agreed for providing the service.</p>
<p><strong>9.3 RevenueCat — subscription management</strong><br>Data processed: subscription and purchase identifiers and entitlement status, and a pseudonymous app user identifier. Purpose: validating and managing subscriptions and entitlements across the App Stores. Legal basis: Art. 6(1)(b) GDPR. Location: may process data in the United States (see Section 14). Relationship: processor under Art. 28 GDPR.</p>
<p><strong>9.4 Apple and Google — App Stores, payments, and platform sign-in</strong><br>Data processed: purchase, payment, and platform-authentication data that you provide directly to these platforms. Purpose: distributing the app, processing payments and subscriptions, and providing Sign in with Apple / Google Sign-In. Role: Apple and Google act as independent controllers for the platform and payment processes they operate. We do not receive your full payment details. Their processing is governed by their own privacy policies.</p>
<p><strong>9.5 Maileroo — email delivery</strong><br>Data processed: your email address and the content of the emails sent. Purpose: delivering transactional emails and, where applicable and with consent, other emails. Legal basis: Art. 6(1)(b) GDPR; Art. 6(1)(a) GDPR for marketing emails. Relationship: processor under Art. 28 GDPR.</p>
<p><strong>9.6 Analytics and advertising providers (only with consent)</strong><br>See Section 11 for the detailed list and conditions.</p>
<p>We may engage additional or alternative providers in the future for the same purposes; we will update this Policy accordingly and, where required, obtain your consent before activating them.</p>`,
        },
        de: {
          head: '9. Drittanbieter von Diensten (im Detail)',
          body: `<p>Zum Betrieb des Dienstes setzen wir sorgfältig ausgewählte Dienstleister ein. Soweit diese personenbezogene Daten in unserem Auftrag verarbeiten, schließen wir mit ihnen Auftragsverarbeitungsverträge nach Art. 28 DSGVO. Wir verkaufen deine personenbezogenen Daten nicht. Im Folgenden werden die einzelnen Anbieter, die betroffenen Daten und die Schutzmaßnahmen beschrieben.</p>
<p><strong>9.1 Supabase — Backend-Hosting, Authentifizierung, Datenbank und Speicher</strong><br>Verarbeitete Daten: Kontodaten, Einstellungen, nutzergenerierte Inhalte, KI-Eingaben und -Ausgaben, Abonnementstatus sowie technische Daten/Verbindungsdaten. Zweck: Hosting unseres Anwendungs-Backends; Authentifizierung von Nutzern; Speicherung der Datenbank und hochgeladener Dateien (Bilder, Audio, Video, Musik). Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (und Art. 6 Abs. 1 lit. f für Sicherheit/Betrieb). Standort: gehostet auf der Infrastruktur von Amazon Web Services (AWS) in den Vereinigten Staaten (Region US East, Northern Virginia). Dies ist eine Übermittlung in ein Drittland (siehe Abschnitt 14). Verhältnis: Auftragsverarbeiter nach Art. 28 DSGVO.</p>
<p><strong>9.2 Anthropic — KI-Inhaltserstellung</strong><br>Verarbeitete Daten: die von dir zur Generierung übermittelten Eingaben und Texte sowie das generierte Ergebnis. Zweck: Erstellung von Affirmationen und Visualisierungen auf Grundlage deiner Eingaben, serverseitig über unser Backend aufgerufen. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Standort: kann Daten in den Vereinigten Staaten verarbeiten (siehe Abschnitt 14). Verhältnis: Auftragsverarbeiter nach Art. 28 DSGVO. Wir nutzen die API des Anbieters und gestatten nicht, deine Eingaben über das zur Erbringung des Dienstes vertraglich Vereinbarte hinaus zum Training seiner allgemeinen Modelle zu verwenden.</p>
<p><strong>9.3 RevenueCat — Abonnementverwaltung</strong><br>Verarbeitete Daten: Abonnement- und Kaufkennungen sowie Berechtigungsstatus und eine pseudonyme App-Nutzerkennung. Zweck: Validierung und Verwaltung von Abonnements und Berechtigungen über die App Stores hinweg. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO. Standort: kann Daten in den Vereinigten Staaten verarbeiten (siehe Abschnitt 14). Verhältnis: Auftragsverarbeiter nach Art. 28 DSGVO.</p>
<p><strong>9.4 Apple und Google — App Stores, Zahlungen und Plattform-Anmeldung</strong><br>Verarbeitete Daten: Kauf-, Zahlungs- und Plattform-Authentifizierungsdaten, die du direkt an diese Plattformen übermittelst. Zweck: Vertrieb der App, Abwicklung von Zahlungen und Abonnements sowie Bereitstellung von „Anmelden mit Apple" / „Google-Anmeldung". Rolle: Apple und Google handeln als eigenständige Verantwortliche für die von ihnen betriebenen Plattform- und Zahlungsprozesse. Wir erhalten deine vollständigen Zahlungsdaten nicht. Ihre Verarbeitung richtet sich nach ihren eigenen Datenschutzerklärungen.</p>
<p><strong>9.5 Maileroo — E-Mail-Zustellung</strong><br>Verarbeitete Daten: deine E-Mail-Adresse und der Inhalt der versendeten E-Mails. Zweck: Zustellung transaktionaler E-Mails und, sofern zutreffend und mit Einwilligung, sonstiger E-Mails. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO; Art. 6 Abs. 1 lit. a DSGVO für Marketing-E-Mails. Verhältnis: Auftragsverarbeiter nach Art. 28 DSGVO.</p>
<p><strong>9.6 Analyse- und Werbeanbieter (nur mit Einwilligung)</strong><br>Die detaillierte Liste und die Bedingungen findest du in Abschnitt 11.</p>
<p>Wir können künftig zusätzliche oder alternative Anbieter für dieselben Zwecke einsetzen; wir werden diese Erklärung entsprechend aktualisieren und, soweit erforderlich, deine Einwilligung einholen, bevor wir sie aktivieren.</p>`,
        },
      },
      {
        en: {
          head: '10. Local Storage, SDKs, and Device Identifiers',
          body: `<p>As a mobile application, Neomind does not use browser cookies in the traditional sense. However, to function, the app stores certain information on your device, such as:</p>
<ul>
<li>Authentication tokens and session information, stored securely on the device (for example, in the operating system's secure storage), so that you remain signed in.</li>
<li>Local app settings and cached content, to provide a smooth experience and enable offline access to some content.</li>
<li>Locally scheduled reminder/notification data (see Section 12).</li>
</ul>
<p>This storage that is strictly necessary to provide the Service you requested does not require consent. Any storage of, or access to, information on your device by analytics or advertising tools (Section 11) is not strictly necessary and is therefore only carried out with your consent in accordance with § 25(1) TDDDG.</p>`,
        },
        de: {
          head: '10. Lokale Speicherung, SDKs und Gerätekennungen',
          body: `<p>Als mobile Anwendung verwendet Neomind keine Browser-Cookies im herkömmlichen Sinne. Um zu funktionieren, speichert die App jedoch bestimmte Informationen auf deinem Gerät, etwa:</p>
<ul>
<li>Authentifizierungs-Tokens und Sitzungsinformationen, sicher auf dem Gerät gespeichert (zum Beispiel im sicheren Speicher des Betriebssystems), damit du angemeldet bleibst.</li>
<li>Lokale App-Einstellungen und zwischengespeicherte Inhalte, um ein reibungsloses Erlebnis zu bieten und den Offline-Zugriff auf einige Inhalte zu ermöglichen.</li>
<li>Lokal geplante Erinnerungs-/Benachrichtigungsdaten (siehe Abschnitt 12).</li>
</ul>
<p>Diese Speicherung, die zur Bereitstellung des von dir angeforderten Dienstes unbedingt erforderlich ist, bedarf keiner Einwilligung. Jede Speicherung von oder jeder Zugriff auf Informationen auf deinem Gerät durch Analyse- oder Werbe-Tools (Abschnitt 11) ist nicht unbedingt erforderlich und erfolgt daher nur mit deiner Einwilligung gemäß § 25 Abs. 1 TDDDG.</p>`,
        },
      },
      {
        en: {
          head: '11. Analytics and Advertising Tools (Consent-Based)',
          body: `<p>We may use the following tools to analyse usage and to measure marketing. These tools are only activated if and after you have given your consent, and you can withdraw your consent at any time with effect for the future. Until you consent, these tools are not loaded and do not collect data through the Service. Some of these providers are located in or transfer data to the United States (see Section 14). Each provider's own privacy policy governs its processing as a controller or joint controller for its own purposes.</p>
<p><strong>11.1 Analytics</strong></p>
<ul>
<li><strong>Google Analytics / Google Analytics for Firebase (Google)</strong> — Purpose: usage and event analytics, understanding feature use and retention. Provider: Google (United States / EU). Legal basis: your consent, Art. 6(1)(a) GDPR; § 25(1) TDDDG.</li>
<li><strong>PostHog</strong> — Purpose: product analytics (funnels, retention, feature usage). Provider: PostHog; may be hosted in the EU or the US depending on our configuration. Legal basis: your consent, Art. 6(1)(a) GDPR; § 25(1) TDDDG.</li>
</ul>
<p><strong>11.2 Advertising and conversion measurement</strong></p>
<ul>
<li><strong>Meta Pixel / Conversions API (Meta Platforms)</strong> — Purpose: measuring and optimising advertising on Facebook and Instagram, and reaching relevant audiences.</li>
<li><strong>Pinterest Tag (Pinterest)</strong> — Purpose: advertising measurement and audience building on Pinterest.</li>
<li><strong>TikTok Pixel (TikTok)</strong> — Purpose: advertising measurement and attribution on TikTok.</li>
<li><strong>Google Ads / AdMob (Google)</strong> — Purpose: advertising, conversion tracking, and campaign measurement.</li>
</ul>
<p>Legal basis for all of the above: your consent, Art. 6(1)(a) GDPR; and § 25(1) TDDDG for storage of or access to information on your device.</p>
<p>These advertising providers may act as independent controllers or joint controllers for their own purposes (for example, to build advertising profiles across services). Where joint controllership applies, we conclude the required arrangements under Art. 26 GDPR. For full details of their processing, please refer to each provider's privacy policy.</p>
<p>Note: Some of these tools are planned and may not be active at all times. We will keep this Policy up to date and only process data through a given tool once it is live and you have consented. You can manage or withdraw your consent at any time via the in-app privacy/consent settings (see Section 18).</p>`,
        },
        de: {
          head: '11. Analyse- und Werbe-Tools (einwilligungsbasiert)',
          body: `<p>Wir können die folgenden Tools einsetzen, um die Nutzung zu analysieren und Marketing zu messen. Diese Tools werden nur aktiviert, sofern und nachdem du deine Einwilligung erteilt hast, und du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Bis zu deiner Einwilligung werden diese Tools nicht geladen und erheben über den Dienst keine Daten. Einige dieser Anbieter befinden sich in den Vereinigten Staaten oder übermitteln Daten dorthin (siehe Abschnitt 14). Für die Verarbeitung zu eigenen Zwecken als Verantwortlicher oder gemeinsam Verantwortlicher gilt die jeweils eigene Datenschutzerklärung des Anbieters.</p>
<p><strong>11.1 Analyse</strong></p>
<ul>
<li><strong>Google Analytics / Google Analytics for Firebase (Google)</strong> — Zweck: Nutzungs- und Ereignisanalyse, Verständnis von Funktionsnutzung und Bindung. Anbieter: Google (Vereinigte Staaten / EU). Rechtsgrundlage: deine Einwilligung, Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1 TDDDG.</li>
<li><strong>PostHog</strong> — Zweck: Produktanalyse (Funnels, Bindung, Funktionsnutzung). Anbieter: PostHog; je nach unserer Konfiguration ggf. in der EU oder den USA gehostet. Rechtsgrundlage: deine Einwilligung, Art. 6 Abs. 1 lit. a DSGVO; § 25 Abs. 1 TDDDG.</li>
</ul>
<p><strong>11.2 Werbung und Conversion-Messung</strong></p>
<ul>
<li><strong>Meta Pixel / Conversions API (Meta Platforms)</strong> — Zweck: Messung und Optimierung von Werbung auf Facebook und Instagram sowie Erreichen relevanter Zielgruppen.</li>
<li><strong>Pinterest Tag (Pinterest)</strong> — Zweck: Werbemessung und Zielgruppenaufbau auf Pinterest.</li>
<li><strong>TikTok Pixel (TikTok)</strong> — Zweck: Werbemessung und Attribution auf TikTok.</li>
<li><strong>Google Ads / AdMob (Google)</strong> — Zweck: Werbung, Conversion-Tracking und Kampagnenmessung.</li>
</ul>
<p>Rechtsgrundlage für alle vorstehenden: deine Einwilligung, Art. 6 Abs. 1 lit. a DSGVO; und § 25 Abs. 1 TDDDG für das Speichern von oder den Zugriff auf Informationen auf deinem Gerät.</p>
<p>Diese Werbeanbieter können zu eigenen Zwecken als eigenständige Verantwortliche oder gemeinsam Verantwortliche handeln (zum Beispiel um dienstübergreifend Werbeprofile zu erstellen). Soweit eine gemeinsame Verantwortlichkeit besteht, schließen wir die erforderlichen Vereinbarungen nach Art. 26 DSGVO. Vollständige Einzelheiten zu ihrer Verarbeitung findest du in der Datenschutzerklärung des jeweiligen Anbieters.</p>
<p>Hinweis: Einige dieser Tools sind geplant und möglicherweise nicht immer aktiv. Wir halten diese Erklärung aktuell und verarbeiten Daten über ein bestimmtes Tool erst, sobald es aktiv ist und du eingewilligt hast. Du kannst deine Einwilligung jederzeit über die Datenschutz-/Einwilligungseinstellungen in der App verwalten oder widerrufen (siehe Abschnitt 18).</p>`,
        },
      },
      {
        en: {
          head: '12. Push Notifications and Reminders',
          body: `<p>The Service offers reminders to support your practice habits. Currently these reminders are scheduled and delivered locally on your device and do not require us to process a server-side push token. If we introduce remote push notifications in the future, we will process a device push token through the relevant platform service (for example, Apple Push Notification service or the equivalent for Android) to deliver messages, and we will update this Policy accordingly. You can disable notifications at any time in your device settings. Legal basis: Art. 6(1)(b) GDPR for service-related reminders you set up; consent for any optional promotional notifications.</p>`,
        },
        de: {
          head: '12. Push-Benachrichtigungen und Erinnerungen',
          body: `<p>Der Dienst bietet Erinnerungen, um deine Übungsgewohnheiten zu unterstützen. Derzeit werden diese Erinnerungen lokal auf deinem Gerät geplant und zugestellt und erfordern keine Verarbeitung eines serverseitigen Push-Tokens durch uns. Sollten wir künftig Remote-Push-Benachrichtigungen einführen, verarbeiten wir zur Zustellung von Nachrichten einen Geräte-Push-Token über den jeweiligen Plattformdienst (zum Beispiel den Apple-Push-Notification-Dienst oder das entsprechende Pendant für Android) und aktualisieren diese Erklärung entsprechend. Du kannst Benachrichtigungen jederzeit in deinen Geräteeinstellungen deaktivieren. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO für von dir eingerichtete servicebezogene Erinnerungen; Einwilligung für etwaige optionale werbliche Benachrichtigungen.</p>`,
        },
      },
      {
        en: {
          head: '13. Sign in with Apple and Google',
          body: `<p>If you choose to sign in using Apple or Google, the respective provider authenticates you and shares a limited set of authentication data with us, such as a unique user identifier and, depending on the provider and your choices, your name or an email address (which may be a private relay address in the case of Apple). We use this data solely to create and secure your account and to sign you in. The authentication process itself is operated by Apple or Google as an independent controller under their own privacy policies. Legal basis: Art. 6(1)(b) GDPR.</p>`,
        },
        de: {
          head: '13. Anmelden mit Apple und Google',
          body: `<p>Wenn du dich für die Anmeldung über Apple oder Google entscheidest, authentifiziert dich der jeweilige Anbieter und übermittelt uns einen begrenzten Satz an Authentifizierungsdaten, etwa eine eindeutige Nutzerkennung und, je nach Anbieter und deiner Wahl, deinen Namen oder eine E-Mail-Adresse (bei Apple ggf. eine private Relay-Adresse). Wir nutzen diese Daten ausschließlich, um dein Konto zu erstellen und zu sichern und dich anzumelden. Der Authentifizierungsvorgang selbst wird von Apple oder Google als eigenständigem Verantwortlichen nach deren eigenen Datenschutzerklärungen betrieben. Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO.</p>`,
        },
      },
      {
        en: {
          head: '14. International Data Transfers',
          body: `<p>Some of our service providers are located in, or process data in, the United States or other countries outside the EEA, which may not provide a level of data protection equivalent to that of the EU. In particular, our database and stored files are hosted on AWS infrastructure in the United States (Northern Virginia), and our AI, subscription, and (consent-based) analytics and advertising providers may process data in the United States.</p>
<p>Where we transfer personal data to a third country, we ensure appropriate safeguards in accordance with Chapter V of the GDPR, in particular:</p>
<ul>
<li>the European Commission's Standard Contractual Clauses (SCCs) pursuant to Art. 46(2)(c) GDPR, supplemented by additional measures where necessary; and/or</li>
<li>certification of the recipient under the EU-U.S. Data Privacy Framework (DPF) pursuant to an adequacy decision under Art. 45 GDPR, where the provider is certified; and/or</li>
<li>your explicit consent for specific transfers where applicable, Art. 49(1)(a) GDPR.</li>
</ul>
<p>You can request a copy of the relevant safeguards or further information about these transfers by contacting us at neomind.help@gmail.com.</p>`,
        },
        de: {
          head: '14. Internationale Datenübermittlungen',
          body: `<p>Einige unserer Dienstleister befinden sich in den Vereinigten Staaten oder anderen Ländern außerhalb des EWR oder verarbeiten dort Daten, die möglicherweise kein der EU gleichwertiges Datenschutzniveau bieten. Insbesondere werden unsere Datenbank und gespeicherte Dateien auf AWS-Infrastruktur in den Vereinigten Staaten (Northern Virginia) gehostet, und unsere Anbieter für KI, Abonnements sowie (einwilligungsbasiert) Analyse und Werbung können Daten in den Vereinigten Staaten verarbeiten.</p>
<p>Soweit wir personenbezogene Daten in ein Drittland übermitteln, stellen wir geeignete Garantien gemäß Kapitel V der DSGVO sicher, insbesondere:</p>
<ul>
<li>die Standardvertragsklauseln (SCC) der Europäischen Kommission gemäß Art. 46 Abs. 2 lit. c DSGVO, soweit erforderlich durch ergänzende Maßnahmen flankiert; und/oder</li>
<li>die Zertifizierung des Empfängers nach dem EU-U.S. Data Privacy Framework (DPF) auf Grundlage eines Angemessenheitsbeschlusses nach Art. 45 DSGVO, soweit der Anbieter zertifiziert ist; und/oder</li>
<li>deine ausdrückliche Einwilligung für bestimmte Übermittlungen, soweit anwendbar, Art. 49 Abs. 1 lit. a DSGVO.</li>
</ul>
<p>Du kannst eine Kopie der einschlägigen Garantien oder weitere Informationen zu diesen Übermittlungen anfordern, indem du uns unter neomind.help@gmail.com kontaktierst.</p>`,
        },
      },
      {
        en: {
          head: '15. Data Retention and Deletion',
          body: `<p>We retain personal data only for as long as necessary for the purposes described in this Policy, or as required by law:</p>
<ul>
<li>Account data and User-generated content: for the duration of your account.</li>
<li>When you delete your account, we delete or anonymise your associated personal data and User-generated content, unless we are legally required or permitted to retain certain data (for example, to comply with statutory retention obligations or to establish, exercise, or defend legal claims).</li>
<li>Backups: residual copies in encrypted backups are deleted in the ordinary course of our backup rotation cycles.</li>
<li>AI generation usage counters: retained as long as needed to enforce monthly usage limits.</li>
<li>Communications: support correspondence is retained as long as needed to handle your request and for a reasonable period thereafter.</li>
<li>Consent-based analytics/advertising data: retained according to the respective provider's retention periods and the scope of your consent.</li>
</ul>
<p>When the purpose of processing ceases and no legal retention obligation applies, we delete or anonymise the relevant data.</p>
<p><strong>Important:</strong> Deleting your account does not automatically cancel an active paid subscription. You must cancel any subscription separately through the relevant App Store.</p>`,
        },
        de: {
          head: '15. Speicherdauer und Löschung',
          body: `<p>Wir speichern personenbezogene Daten nur so lange, wie es für die in dieser Erklärung beschriebenen Zwecke erforderlich oder gesetzlich vorgeschrieben ist:</p>
<ul>
<li>Kontodaten und nutzergenerierte Inhalte: für die Dauer deines Kontos.</li>
<li>Wenn du dein Konto löschst, löschen oder anonymisieren wir die damit verbundenen personenbezogenen Daten und nutzergenerierten Inhalte, sofern wir nicht gesetzlich verpflichtet oder berechtigt sind, bestimmte Daten aufzubewahren (zum Beispiel zur Erfüllung gesetzlicher Aufbewahrungspflichten oder zur Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen).</li>
<li>Backups: Restkopien in verschlüsselten Backups werden im Zuge unserer üblichen Backup-Rotationszyklen gelöscht.</li>
<li>Nutzungszähler der KI-Generierung: so lange aufbewahrt, wie es zur Durchsetzung der monatlichen Nutzungslimits erforderlich ist.</li>
<li>Kommunikation: Support-Korrespondenz wird so lange aufbewahrt, wie es zur Bearbeitung deines Anliegens erforderlich ist, sowie für einen angemessenen Zeitraum danach.</li>
<li>Einwilligungsbasierte Analyse-/Werbedaten: aufbewahrt entsprechend den Aufbewahrungsfristen des jeweiligen Anbieters und dem Umfang deiner Einwilligung.</li>
</ul>
<p>Wenn der Verarbeitungszweck entfällt und keine gesetzliche Aufbewahrungspflicht besteht, löschen oder anonymisieren wir die betreffenden Daten.</p>
<p><strong>Wichtig:</strong> Das Löschen deines Kontos kündigt ein aktives kostenpflichtiges Abonnement nicht automatisch. Du musst ein Abonnement separat über den jeweiligen App Store kündigen.</p>`,
        },
      },
      {
        en: {
          head: '16. Data Security',
          body: `<p>We implement appropriate technical and organisational measures (TOMs) to protect your personal data against unauthorised access, loss, misuse, alteration, or disclosure. These include, among others:</p>
<ul>
<li>encryption of data in transit (e.g. TLS) between the app and our backend;</li>
<li>access controls and authentication for our systems;</li>
<li>row-level security so that user data is scoped to the respective account;</li>
<li>secure on-device storage of authentication tokens; and</li>
<li>the principle of least privilege for access to personal data.</li>
</ul>
<p>No method of transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee absolute security. In the event of a personal data breach that is likely to result in a high risk to your rights and freedoms, we will notify you and the competent supervisory authority as required by Art. 33 and 34 GDPR.</p>`,
        },
        de: {
          head: '16. Datensicherheit',
          body: `<p>Wir treffen geeignete technische und organisatorische Maßnahmen (TOM), um deine personenbezogenen Daten vor unbefugtem Zugriff, Verlust, Missbrauch, Veränderung oder Offenlegung zu schützen. Dazu gehören unter anderem:</p>
<ul>
<li>Verschlüsselung der Daten während der Übertragung (z. B. TLS) zwischen der App und unserem Backend;</li>
<li>Zugriffskontrollen und Authentifizierung für unsere Systeme;</li>
<li>Row-Level-Security, sodass Nutzerdaten auf das jeweilige Konto beschränkt sind;</li>
<li>sichere geräteseitige Speicherung von Authentifizierungs-Tokens; und</li>
<li>das Prinzip der geringstmöglichen Berechtigung für den Zugriff auf personenbezogene Daten.</li>
</ul>
<p>Keine Methode der Übertragung über das Internet und keine Methode der elektronischen Speicherung ist vollständig sicher, und wir können keine absolute Sicherheit garantieren. Im Falle einer Verletzung des Schutzes personenbezogener Daten, die voraussichtlich ein hohes Risiko für deine Rechte und Freiheiten zur Folge hat, benachrichtigen wir dich und die zuständige Aufsichtsbehörde, wie in Art. 33 und 34 DSGVO vorgesehen.</p>`,
        },
      },
      {
        en: {
          head: '17. Your Rights in Detail',
          body: `<p>Subject to the conditions of applicable data protection law, you have the following rights regarding your personal data:</p>
<ul>
<li><strong>Right of access (Art. 15 GDPR):</strong> you may ask us to confirm whether we process your data and to obtain a copy of that data and information about the processing.</li>
<li><strong>Right to rectification (Art. 16 GDPR):</strong> you may ask us to correct inaccurate data or complete incomplete data.</li>
<li><strong>Right to erasure (Art. 17 GDPR):</strong> you may ask us to delete your data where one of the legal grounds applies (for example, the data is no longer necessary, or you withdraw consent).</li>
<li><strong>Right to restriction (Art. 18 GDPR):</strong> you may ask us to restrict processing in certain circumstances, for example while the accuracy of data is being verified.</li>
<li><strong>Right to data portability (Art. 20 GDPR):</strong> you may ask to receive the data you provided to us in a structured, commonly used, machine-readable format, and to have it transmitted to another controller where technically feasible.</li>
<li><strong>Right to object (Art. 21 GDPR):</strong> you may object, on grounds relating to your particular situation, to processing based on our legitimate interests. You may object to processing for direct marketing purposes at any time.</li>
<li><strong>Right to withdraw consent (Art. 7(3) GDPR):</strong> where processing is based on consent, you may withdraw it at any time with effect for the future, without affecting the lawfulness of processing before the withdrawal.</li>
</ul>
<p>To exercise these rights, contact us at neomind.help@gmail.com. We may need to verify your identity before responding. We will respond within the statutory time limits (generally one month, extendable where permitted). You can also delete your account at any time using the account deletion function in the app (see Section 15).</p>
<p><strong>Right to lodge a complaint:</strong> You have the right to lodge a complaint with a data protection supervisory authority. The authority competent for us is:</p>
<p>Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)<br>Postfach 3163, 65021 Wiesbaden, Germany<br>Website: <a href="https://datenschutz.hessen.de">https://datenschutz.hessen.de</a></p>
<p>You may also contact the supervisory authority of your habitual residence or place of the alleged infringement.</p>`,
        },
        de: {
          head: '17. Deine Rechte im Detail',
          body: `<p>Vorbehaltlich der Voraussetzungen des geltenden Datenschutzrechts hast du folgende Rechte hinsichtlich deiner personenbezogenen Daten:</p>
<ul>
<li><strong>Auskunftsrecht (Art. 15 DSGVO):</strong> Du kannst von uns eine Bestätigung verlangen, ob wir deine Daten verarbeiten, sowie eine Kopie dieser Daten und Informationen über die Verarbeitung erhalten.</li>
<li><strong>Recht auf Berichtigung (Art. 16 DSGVO):</strong> Du kannst von uns die Berichtigung unrichtiger Daten oder die Vervollständigung unvollständiger Daten verlangen.</li>
<li><strong>Recht auf Löschung (Art. 17 DSGVO):</strong> Du kannst die Löschung deiner Daten verlangen, sofern einer der gesetzlichen Gründe vorliegt (zum Beispiel, dass die Daten nicht mehr erforderlich sind oder du deine Einwilligung widerrufst).</li>
<li><strong>Recht auf Einschränkung (Art. 18 DSGVO):</strong> Du kannst unter bestimmten Umständen die Einschränkung der Verarbeitung verlangen, zum Beispiel während die Richtigkeit von Daten überprüft wird.</li>
<li><strong>Recht auf Datenübertragbarkeit (Art. 20 DSGVO):</strong> Du kannst verlangen, die uns von dir bereitgestellten Daten in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten und sie, soweit technisch machbar, an einen anderen Verantwortlichen übermitteln zu lassen.</li>
<li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Du kannst aus Gründen, die sich aus deiner besonderen Situation ergeben, der auf unseren berechtigten Interessen beruhenden Verarbeitung widersprechen. Einer Verarbeitung zu Zwecken der Direktwerbung kannst du jederzeit widersprechen.</li>
<li><strong>Recht auf Widerruf der Einwilligung (Art. 7 Abs. 3 DSGVO):</strong> Soweit die Verarbeitung auf einer Einwilligung beruht, kannst du diese jederzeit mit Wirkung für die Zukunft widerrufen, ohne dass die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung berührt wird.</li>
</ul>
<p>Zur Ausübung dieser Rechte kontaktiere uns unter neomind.help@gmail.com. Wir müssen gegebenenfalls deine Identität überprüfen, bevor wir antworten. Wir antworten innerhalb der gesetzlichen Fristen (in der Regel ein Monat, soweit zulässig verlängerbar). Du kannst dein Konto außerdem jederzeit über die Kontolöschfunktion in der App löschen (siehe Abschnitt 15).</p>
<p><strong>Recht auf Beschwerde:</strong> Du hast das Recht, dich bei einer Datenschutzaufsichtsbehörde zu beschweren. Die für uns zuständige Behörde ist:</p>
<p>Der Hessische Beauftragte für Datenschutz und Informationsfreiheit (HBDI)<br>Postfach 3163, 65021 Wiesbaden, Deutschland<br>Website: <a href="https://datenschutz.hessen.de">https://datenschutz.hessen.de</a></p>
<p>Du kannst dich auch an die Aufsichtsbehörde deines gewöhnlichen Aufenthaltsorts oder des Orts des mutmaßlichen Verstoßes wenden.</p>`,
        },
      },
      {
        en: {
          head: '18. Consent Management and Withdrawal',
          body: `<p>Where processing is based on your consent (in particular analytics and advertising, Section 11), we obtain your consent through an in-app consent mechanism before the relevant tools are activated. You can review and change your choices at any time in the app's privacy/consent settings, or by contacting us. Withdrawing consent is as easy as giving it, and it does not affect the lawfulness of processing carried out before the withdrawal.</p>`,
        },
        de: {
          head: '18. Verwaltung und Widerruf der Einwilligung',
          body: `<p>Soweit die Verarbeitung auf deiner Einwilligung beruht (insbesondere Analyse und Werbung, Abschnitt 11), holen wir deine Einwilligung über einen Einwilligungsmechanismus in der App ein, bevor die betreffenden Tools aktiviert werden. Du kannst deine Entscheidungen jederzeit in den Datenschutz-/Einwilligungseinstellungen der App überprüfen und ändern oder uns kontaktieren. Der Widerruf der Einwilligung ist ebenso einfach wie ihre Erteilung und berührt nicht die Rechtmäßigkeit der bis zum Widerruf erfolgten Verarbeitung.</p>`,
        },
      },
      {
        en: {
          head: '19. Children',
          body: `<p>The Service is intended exclusively for adults aged 18 and over. We do not knowingly collect personal data from children. If you believe that a minor has provided us with personal data, please contact us at neomind.help@gmail.com so that we can take appropriate action, including deleting the data.</p>`,
        },
        de: {
          head: '19. Kinder',
          body: `<p>Der Dienst ist ausschließlich für Erwachsene ab 18 Jahren bestimmt. Wir erheben nicht wissentlich personenbezogene Daten von Kindern. Wenn du Grund zu der Annahme hast, dass uns eine minderjährige Person personenbezogene Daten übermittelt hat, kontaktiere uns bitte unter neomind.help@gmail.com, damit wir geeignete Maßnahmen ergreifen können, einschließlich der Löschung der Daten.</p>`,
        },
      },
      {
        en: {
          head: '20. Automated Decision-Making and Profiling',
          body: `<p>We do not use automated decision-making, including profiling, that produces legal effects concerning you or similarly significantly affects you within the meaning of Art. 22 GDPR. The AI feature generates content based on the input you provide but does not make decisions about you. Where you consent to advertising tools (Section 11), those third-party providers may carry out profiling for their own advertising purposes under their own responsibility; you can decline or withdraw consent at any time.</p>`,
        },
        de: {
          head: '20. Automatisierte Entscheidungsfindung und Profiling',
          body: `<p>Wir setzen keine automatisierte Entscheidungsfindung einschließlich Profiling ein, die dir gegenüber rechtliche Wirkung entfaltet oder dich in ähnlicher Weise erheblich beeinträchtigt im Sinne von Art. 22 DSGVO. Die KI-Funktion erstellt Inhalte auf Grundlage deiner Eingaben, trifft jedoch keine Entscheidungen über dich. Soweit du in Werbe-Tools einwilligst (Abschnitt 11), können diese Drittanbieter in eigener Verantwortung Profiling zu eigenen Werbezwecken durchführen; du kannst die Einwilligung jederzeit ablehnen oder widerrufen.</p>`,
        },
      },
      {
        en: {
          head: '21. Links to Third-Party Services',
          body: `<p>The Service or our communications may contain links to third-party websites or services (for example, app store pages or social media). We are not responsible for the privacy practices or content of those third parties. We encourage you to review the privacy policies of any third-party services you visit.</p>`,
        },
        de: {
          head: '21. Links zu Diensten Dritter',
          body: `<p>Der Dienst oder unsere Mitteilungen können Links zu Websites oder Diensten Dritter enthalten (zum Beispiel App-Store-Seiten oder soziale Medien). Wir sind nicht für die Datenschutzpraktiken oder Inhalte dieser Dritten verantwortlich. Wir empfehlen dir, die Datenschutzerklärungen der von dir besuchten Drittdienste zu prüfen.</p>`,
        },
      },
      {
        en: {
          head: '22. Changes to this Privacy Policy',
          body: `<p>We may update this Privacy Policy from time to time, for example when we add new features or service providers, or when legal requirements change. The current version is always available in the app and at https://getneomind.com. Where changes are material, we will inform you in an appropriate manner (for example, by email or via an in-app notice). The "Last updated" date at the top of this Policy indicates the latest revision. Where a change requires your consent, we will obtain it before the change takes effect.</p>`,
        },
        de: {
          head: '22. Änderungen dieser Datenschutzerklärung',
          body: `<p>Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren, zum Beispiel wenn wir neue Funktionen oder Dienstleister hinzufügen oder sich die rechtlichen Anforderungen ändern. Die aktuelle Fassung ist stets in der App und unter https://getneomind.com verfügbar. Bei wesentlichen Änderungen informieren wir dich in geeigneter Weise (zum Beispiel per E-Mail oder über einen Hinweis in der App). Das Datum „Zuletzt aktualisiert" am Anfang dieser Erklärung gibt die letzte Überarbeitung an. Soweit eine Änderung deine Einwilligung erfordert, holen wir diese ein, bevor die Änderung wirksam wird.</p>`,
        },
      },
      {
        en: {
          head: '23. Contact',
          body: `<p>For any privacy-related questions or to exercise your rights, please contact:</p>
<p>Leonidas Metenidis (Neomind)<br>Saligstraße 10, 63069 Offenbach am Main, Germany<br>Email: <a href="mailto:neomind.help@gmail.com">neomind.help@gmail.com</a></p>`,
        },
        de: {
          head: '23. Kontakt',
          body: `<p>Bei datenschutzbezogenen Fragen oder zur Ausübung deiner Rechte kontaktiere bitte:</p>
<p>Leonidas Metenidis (Neomind)<br>Saligstraße 10, 63069 Offenbach am Main, Deutschland<br>E-Mail: <a href="mailto:neomind.help@gmail.com">neomind.help@gmail.com</a></p>`,
        },
      },
    ],
  },

  terms: {
    meta: {
      updated: {
        en: 'Last updated: 22 June 2026 · Effective date: 22 June 2026',
        de: 'Zuletzt aktualisiert: 22. Juni 2026 · Gültig ab: 22. Juni 2026',
      },
      note: {
        en: 'These Terms of Service form a contractual document that governs your use of the Neomind app. They have been drafted to align with German and EU consumer law. Where these Terms conflict with mandatory consumer protection rights granted to you by the law of your country of residence in the European Union, those mandatory rights take precedence.',
        de: 'Diese Allgemeinen Geschäftsbedingungen bilden ein vertragliches Dokument, das deine Nutzung der Neomind-App regelt. Sie sind darauf ausgerichtet, im Einklang mit dem deutschen und dem EU-Verbraucherrecht zu stehen. Soweit diese Bedingungen mit zwingenden Verbraucherschutzrechten kollidieren, die dir das Recht deines Wohnsitzlandes in der Europäischen Union gewährt, haben diese zwingenden Rechte Vorrang.',
      },
    },
    sections: [
      {
        en: {
          head: '1. Scope and Provider',
          body: `<p>1.1 These Terms of Service ("Terms") govern the contractual relationship between you ("you", "the user") and the provider of the Neomind mobile application and related services ("Neomind", "we", "us", "our") regarding your use of the Neomind app and all associated content, features, and functionality (together, the "Service").</p>
<p>1.2 The Service is provided by:</p>
<p>Leonidas Metenidis<br>Business designation: Neomind<br>Saligstraße 10, 63069 Offenbach am Main, Germany<br><br>Sole proprietor (Einzelunternehmer), not entered in the commercial register. Small business within the meaning of Section 19 of the German VAT Act (Kleinunternehmerregelung, § 19 UStG); no value-added tax is charged.<br><br>Email: <a href="mailto:neomind.help@gmail.com">neomind.help@gmail.com</a><br>Website: <a href="https://getneomind.com">https://getneomind.com</a></p>
<p>1.3 These Terms apply in their version valid at the time the contract is concluded. By creating an account or otherwise using the Service, you agree to these Terms. We do not recognise any conflicting or deviating terms of the user unless we have expressly agreed to them in writing.</p>
<p>1.4 The Service is offered in English and German. In the event of any discrepancy between language versions of these Terms, the English version is the authoritative reference, without prejudice to mandatory rights granted to you in your own language by applicable consumer law.</p>`,
        },
        de: {
          head: '1. Geltungsbereich und Anbieter',
          body: `<p>1.1 Diese Allgemeinen Geschäftsbedingungen („AGB") regeln das Vertragsverhältnis zwischen dir („du", „der Nutzer") und dem Anbieter der mobilen Neomind-Anwendung und der damit verbundenen Dienste („Neomind", „wir", „uns", „unser") hinsichtlich deiner Nutzung der Neomind-App und aller zugehörigen Inhalte, Funktionen und Funktionalitäten (zusammen der „Dienst").</p>
<p>1.2 Der Dienst wird angeboten von:</p>
<p>Leonidas Metenidis<br>Geschäftsbezeichnung: Neomind<br>Saligstraße 10, 63069 Offenbach am Main, Deutschland<br><br>Einzelunternehmer, nicht im Handelsregister eingetragen. Kleinunternehmer im Sinne von § 19 UStG (Kleinunternehmerregelung); es wird keine Umsatzsteuer berechnet.<br><br>E-Mail: <a href="mailto:neomind.help@gmail.com">neomind.help@gmail.com</a><br>Website: <a href="https://getneomind.com">https://getneomind.com</a></p>
<p>1.3 Diese AGB gelten in ihrer zum Zeitpunkt des Vertragsschlusses gültigen Fassung. Mit der Erstellung eines Kontos oder der sonstigen Nutzung des Dienstes erklärst du dich mit diesen AGB einverstanden. Entgegenstehende oder abweichende Bedingungen des Nutzers erkennen wir nicht an, es sei denn, wir haben ihnen ausdrücklich schriftlich zugestimmt.</p>
<p>1.4 Der Dienst wird in deutscher und englischer Sprache angeboten. Bei Abweichungen zwischen den Sprachfassungen dieser AGB ist die englische Fassung maßgeblich, unbeschadet zwingender Rechte, die dir das geltende Verbraucherrecht in deiner Sprache gewährt.</p>`,
        },
      },
      {
        en: {
          head: '2. Description of the Service',
          body: `<p>2.1 Neomind is a subscription-based mental wellness application designed to support personal growth and mindset habits. It provides, among other things:</p>
<ul>
<li>(a) curated, built-in content such as affirmations, guided visualizations, vision board materials, "Mini Moments" prompts, and mindset resources;</li>
<li>(b) tools to create, organise, and personalise your own content, including custom affirmations, visualizations, categories, sets, vision boards, recorded audio, and uploaded images, videos, and background music;</li>
<li>(c) AI-assisted content generation that lets you generate text content based on your input (see Section 9);</li>
<li>(d) a full-screen, gesture-based practice mode with text-to-speech, background music, favourites, reminders, themes, and home-screen and lock-screen widgets.</li>
</ul>
<p>2.2 The specific features available to you depend on your subscription or access tier (see Section 6). We continuously develop the Service and may add, modify, or discontinue individual features (see Section 12).</p>
<p>2.3 Neomind is a self-help and personal-development product. It is not a medical device and does not provide medical, psychological, therapeutic, or other professional advice (see Section 13).</p>`,
        },
        de: {
          head: '2. Beschreibung des Dienstes',
          body: `<p>2.1 Neomind ist eine abonnementbasierte Anwendung für mentales Wohlbefinden, die persönliches Wachstum und Mindset-Gewohnheiten unterstützen soll. Sie bietet unter anderem:</p>
<ul>
<li>(a) kuratierte, integrierte Inhalte wie Affirmationen, geführte Visualisierungen, Vision-Board-Materialien, „Mini Moments"-Impulse und Mindset-Ressourcen;</li>
<li>(b) Werkzeuge, um eigene Inhalte zu erstellen, zu organisieren und zu personalisieren, einschließlich eigener Affirmationen, Visualisierungen, Kategorien, Sets, Vision Boards, aufgenommener Audiodateien sowie hochgeladener Bilder, Videos und Hintergrundmusik;</li>
<li>(c) KI-gestützte Inhaltserstellung, mit der du auf Grundlage deiner Eingaben Textinhalte generieren kannst (siehe Abschnitt 9);</li>
<li>(d) einen Vollbild-Übungsmodus mit Gestensteuerung, Text-to-Speech, Hintergrundmusik, Favoriten, Erinnerungen, Designs sowie Homescreen- und Sperrbildschirm-Widgets.</li>
</ul>
<p>2.2 Welche konkreten Funktionen dir zur Verfügung stehen, hängt von deinem Abonnement bzw. deiner Zugangsstufe ab (siehe Abschnitt 6). Wir entwickeln den Dienst fortlaufend weiter und können einzelne Funktionen hinzufügen, ändern oder einstellen (siehe Abschnitt 12).</p>
<p>2.3 Neomind ist ein Selbsthilfe- und Persönlichkeitsentwicklungsprodukt. Es ist kein Medizinprodukt und bietet keine medizinische, psychologische, therapeutische oder sonstige professionelle Beratung (siehe Abschnitt 13).</p>`,
        },
      },
      {
        en: {
          head: '3. Eligibility and User Account',
          body: `<p>3.1 <strong>Age requirement.</strong> The Service is intended exclusively for adults. You may only use the Service and conclude a contract with us if you are at least 18 years of age and have full legal capacity to contract. By using the Service you confirm that you meet these requirements.</p>
<p>3.2 <strong>Registration.</strong> Use of the Service requires the creation of a user account. You may register using an email address or via sign-in with Apple or Google. You must provide accurate information and keep it up to date.</p>
<p>3.3 <strong>Account security.</strong> You are responsible for keeping your login credentials confidential and for all activity that occurs under your account. If you become aware of any unauthorised use of your account, you must inform us without undue delay at neomind.help@gmail.com.</p>
<p>3.4 <strong>One account per person.</strong> Accounts are personal and may not be transferred to or shared with third parties.</p>`,
        },
        de: {
          head: '3. Voraussetzungen und Nutzerkonto',
          body: `<p>3.1 <strong>Altersanforderung.</strong> Der Dienst ist ausschließlich für Erwachsene bestimmt. Du darfst den Dienst nur nutzen und einen Vertrag mit uns nur schließen, wenn du mindestens 18 Jahre alt und voll geschäftsfähig bist. Mit der Nutzung des Dienstes bestätigst du, dass du diese Voraussetzungen erfüllst.</p>
<p>3.2 <strong>Registrierung.</strong> Die Nutzung des Dienstes setzt die Erstellung eines Nutzerkontos voraus. Du kannst dich mit einer E-Mail-Adresse oder über die Anmeldung mit Apple oder Google registrieren. Du musst zutreffende Angaben machen und sie aktuell halten.</p>
<p>3.3 <strong>Kontosicherheit.</strong> Du bist dafür verantwortlich, deine Anmeldedaten vertraulich zu behandeln, und für alle Aktivitäten, die unter deinem Konto erfolgen. Wenn du von einer unbefugten Nutzung deines Kontos Kenntnis erlangst, musst du uns unverzüglich unter neomind.help@gmail.com informieren.</p>
<p>3.4 <strong>Ein Konto pro Person.</strong> Konten sind persönlich und dürfen nicht an Dritte übertragen oder mit ihnen geteilt werden.</p>`,
        },
      },
      {
        en: {
          head: '4. Conclusion of the Contract',
          body: `<p>4.1 The presentation of the Service in app stores and within the app does not constitute a binding offer but an invitation to you to submit an offer.</p>
<p>4.2 A non-paid contract for the use of the free tier of the Service is concluded when you complete account registration and we activate your account.</p>
<p>4.3 A paid subscription contract is concluded in accordance with Section 5 at the time the relevant app store (Apple App Store or Google Play Store) confirms your purchase.</p>`,
        },
        de: {
          head: '4. Zustandekommen des Vertrags',
          body: `<p>4.1 Die Darstellung des Dienstes in App Stores und innerhalb der App stellt kein verbindliches Angebot dar, sondern eine Aufforderung an dich, ein Angebot abzugeben.</p>
<p>4.2 Ein unentgeltlicher Vertrag über die Nutzung der kostenlosen Stufe des Dienstes kommt zustande, wenn du die Kontoregistrierung abschließt und wir dein Konto aktivieren.</p>
<p>4.3 Ein kostenpflichtiger Abonnementvertrag kommt nach Maßgabe von Abschnitt 5 in dem Moment zustande, in dem der jeweilige App Store (Apple App Store oder Google Play Store) deinen Kauf bestätigt.</p>`,
        },
      },
      {
        en: {
          head: '5. Subscriptions, Free Trial, Prices, and Billing',
          body: `<p>5.1 <strong>Sales channel.</strong> All paid subscriptions to Neomind are offered, sold, and billed exclusively through the Apple App Store or the Google Play Store ("the App Stores"), using the in-app purchase systems of those platforms. We do not sell subscriptions directly. Your payment contract for the subscription is therefore subject to the terms and conditions of the relevant App Store, in addition to these Terms.</p>
<p>5.2 <strong>Subscription plans.</strong> Neomind is offered as an auto-renewing subscription, typically as a monthly or an annual plan. The exact plans, prices, currency, and any taxes applicable to you are displayed in the app and in the App Store prior to purchase and are decisive. Prices shown in the app are indicative and may differ by region; the price confirmed by the App Store at the time of purchase applies.</p>
<p>5.3 <strong>Free trial.</strong> We may offer a free trial period (for example, a three-day trial) for new subscribers. Unless you cancel before the end of the trial period, the subscription automatically converts into a paid subscription and the App Store will charge the then-applicable price for the selected plan. The end date of any trial and the date of the first charge are shown to you before you start the trial. Only one trial may be available per user and per platform account; the App Store determines trial eligibility.</p>
<p>5.4 <strong>Automatic renewal.</strong> Subscriptions renew automatically for successive periods of the same length at the then-applicable price, unless you cancel at least 24 hours before the end of the current period (or within the period required by the relevant App Store). The renewal is charged to your App Store account.</p>
<p>5.5 <strong>Cancellation.</strong> You can cancel your subscription at any time, effective at the end of the current billing period, through the subscription settings of your Apple ID (App Store) or Google account (Google Play). Cancelling stops future renewals; it does not retroactively refund the current period. Deleting the Neomind app from your device does not by itself cancel your subscription.</p>
<p>5.6 <strong>Refunds.</strong> Because billing is handled by the App Stores, refunds are subject to the refund policies of Apple or Google and must be requested directly through the respective App Store. This does not affect any mandatory statutory rights you may have.</p>
<p>5.7 <strong>Restoring purchases.</strong> If you reinstall the app or change devices, you can restore an active subscription using the "Restore Purchases" function in the app, provided you use the same App Store account.</p>
<p>5.8 <strong>Price changes.</strong> Changes to subscription prices for future billing periods will be communicated and handled in accordance with the rules of the relevant App Store, which will, where required, obtain your consent or give you the opportunity to cancel before a changed price takes effect.</p>`,
        },
        de: {
          head: '5. Abonnements, kostenlose Testphase, Preise und Abrechnung',
          body: `<p>5.1 <strong>Vertriebskanal.</strong> Alle kostenpflichtigen Abonnements von Neomind werden ausschließlich über den Apple App Store oder den Google Play Store („die App Stores") unter Nutzung der In-App-Kaufsysteme dieser Plattformen angeboten, verkauft und abgerechnet. Wir verkaufen Abonnements nicht direkt. Dein Zahlungsvertrag für das Abonnement unterliegt daher zusätzlich zu diesen AGB den Bedingungen des jeweiligen App Stores.</p>
<p>5.2 <strong>Abonnementpläne.</strong> Neomind wird als automatisch verlängerndes Abonnement angeboten, in der Regel als Monats- oder Jahresplan. Die genauen Pläne, Preise, die Währung und etwaige für dich anfallende Steuern werden in der App und im App Store vor dem Kauf angezeigt und sind maßgeblich. In der App angezeigte Preise sind unverbindlich und können je nach Region abweichen; maßgeblich ist der vom App Store zum Zeitpunkt des Kaufs bestätigte Preis.</p>
<p>5.3 <strong>Kostenlose Testphase.</strong> Wir können für neue Abonnentinnen und Abonnenten eine kostenlose Testphase anbieten (zum Beispiel eine dreitägige Testphase). Sofern du nicht vor Ablauf der Testphase kündigst, wandelt sich das Abonnement automatisch in ein kostenpflichtiges Abonnement um, und der App Store berechnet den dann geltenden Preis für den gewählten Plan. Das Enddatum einer Testphase und das Datum der ersten Abbuchung werden dir vor Beginn der Testphase angezeigt. Pro Nutzer und pro Plattformkonto ist möglicherweise nur eine Testphase verfügbar; über die Berechtigung zur Testphase entscheidet der App Store.</p>
<p>5.4 <strong>Automatische Verlängerung.</strong> Abonnements verlängern sich automatisch um aufeinanderfolgende Zeiträume gleicher Länge zum dann geltenden Preis, sofern du nicht mindestens 24 Stunden vor Ablauf des aktuellen Zeitraums (oder innerhalb der vom jeweiligen App Store geforderten Frist) kündigst. Die Verlängerung wird deinem App-Store-Konto belastet.</p>
<p>5.5 <strong>Kündigung.</strong> Du kannst dein Abonnement jederzeit mit Wirkung zum Ende des aktuellen Abrechnungszeitraums über die Abonnementeinstellungen deiner Apple-ID (App Store) oder deines Google-Kontos (Google Play) kündigen. Eine Kündigung beendet künftige Verlängerungen; sie erstattet den aktuellen Zeitraum nicht rückwirkend. Das Löschen der Neomind-App von deinem Gerät kündigt dein Abonnement für sich genommen nicht.</p>
<p>5.6 <strong>Erstattungen.</strong> Da die Abrechnung über die App Stores erfolgt, unterliegen Erstattungen den Erstattungsrichtlinien von Apple oder Google und müssen direkt über den jeweiligen App Store beantragt werden. Etwaige zwingende gesetzliche Rechte bleiben hiervon unberührt.</p>
<p>5.7 <strong>Wiederherstellung von Käufen.</strong> Wenn du die App neu installierst oder das Gerät wechselst, kannst du ein aktives Abonnement über die Funktion „Käufe wiederherstellen" in der App wiederherstellen, sofern du dasselbe App-Store-Konto verwendest.</p>
<p>5.8 <strong>Preisänderungen.</strong> Änderungen der Abonnementpreise für künftige Abrechnungszeiträume werden nach den Regeln des jeweiligen App Stores mitgeteilt und gehandhabt; dieser holt, soweit erforderlich, deine Zustimmung ein oder gibt dir die Möglichkeit zu kündigen, bevor ein geänderter Preis wirksam wird.</p>`,
        },
      },
      {
        en: {
          head: '6. Access Tiers and Feature Availability',
          body: `<p>6.1 Neomind offers different access tiers, including a free tier and a paid ("subscribed") tier with full access, and may offer additional tiers from time to time. The features and limits associated with each tier (for example, the number of available categories, AI generations per month, custom themes, widgets, or reminders) are described in the app and may be adjusted by us.</p>
<p>6.2 We may change the scope, limits, or composition of the free tier and the paid tier for the future, provided this is reasonable for you taking into account our legitimate interests (for example, technical developments, costs of AI features, or content changes). Changes that significantly reduce the agreed core functionality of a paid subscription during a paid period will be made only in accordance with the applicable statutory provisions on digital products (see Section 11) and Section 16.</p>`,
        },
        de: {
          head: '6. Zugangsstufen und Verfügbarkeit von Funktionen',
          body: `<p>6.1 Neomind bietet verschiedene Zugangsstufen an, darunter eine kostenlose Stufe und eine kostenpflichtige („abonnierte") Stufe mit vollem Zugang, und kann von Zeit zu Zeit weitere Stufen anbieten. Die mit jeder Stufe verbundenen Funktionen und Beschränkungen (zum Beispiel die Anzahl verfügbarer Kategorien, KI-Generierungen pro Monat, eigene Designs, Widgets oder Erinnerungen) sind in der App beschrieben und können von uns angepasst werden.</p>
<p>6.2 Wir können den Umfang, die Beschränkungen oder die Zusammensetzung der kostenlosen und der kostenpflichtigen Stufe für die Zukunft ändern, sofern dies für dich unter Berücksichtigung unserer berechtigten Interessen zumutbar ist (zum Beispiel technische Entwicklungen, Kosten von KI-Funktionen oder Inhaltsänderungen). Änderungen, die die vereinbarte Kernfunktionalität eines kostenpflichtigen Abonnements während eines bezahlten Zeitraums erheblich verringern, erfolgen nur im Einklang mit den geltenden gesetzlichen Vorschriften über digitale Produkte (siehe Abschnitt 11) und Abschnitt 16.</p>`,
        },
      },
      {
        en: {
          head: '7. Right of Withdrawal for Consumers',
          body: `<p>7.1 Where you purchase a subscription through an App Store, the contractual and withdrawal relationship for that purchase is governed primarily by the terms of the relevant App Store, including any cancellation or withdrawal rights they grant.</p>
<p>7.2 To the extent any contract for digital content or digital services is concluded directly with us, you generally have a statutory right of withdrawal of fourteen (14) days as a consumer. However, for digital content and digital services that are supplied immediately, this right of withdrawal expires once we have begun to perform the contract, provided that (a) you have expressly consented to the immediate commencement of performance before the end of the withdrawal period, and (b) you have acknowledged that you thereby lose your right of withdrawal. By starting to use AI-generated content or other digital content immediately upon purchase, you provide such consent and acknowledgement.</p>
<p>7.3 Nothing in this Section limits any non-waivable consumer rights you have under the law of your country of residence in the EU.</p>`,
        },
        de: {
          head: '7. Widerrufsrecht für Verbraucher',
          body: `<p>7.1 Soweit du ein Abonnement über einen App Store erwirbst, richtet sich das Vertrags- und Widerrufsverhältnis für diesen Kauf in erster Linie nach den Bedingungen des jeweiligen App Stores, einschließlich etwaiger von ihnen gewährter Kündigungs- oder Widerrufsrechte.</p>
<p>7.2 Soweit ein Vertrag über digitale Inhalte oder digitale Dienstleistungen unmittelbar mit uns geschlossen wird, steht dir als Verbraucher grundsätzlich ein gesetzliches Widerrufsrecht von vierzehn (14) Tagen zu. Bei digitalen Inhalten und digitalen Dienstleistungen, die sofort bereitgestellt werden, erlischt dieses Widerrufsrecht jedoch, sobald wir mit der Vertragserfüllung begonnen haben, vorausgesetzt, dass (a) du dem sofortigen Beginn der Leistungserbringung vor Ablauf der Widerrufsfrist ausdrücklich zugestimmt und (b) bestätigt hast, dass du dadurch dein Widerrufsrecht verlierst. Indem du KI-generierte Inhalte oder andere digitale Inhalte unmittelbar nach dem Kauf nutzt, erteilst du diese Zustimmung und Bestätigung.</p>
<p>7.3 Nichts in diesem Abschnitt beschränkt unverzichtbare Verbraucherrechte, die dir nach dem Recht deines Wohnsitzlandes in der EU zustehen.</p>`,
        },
      },
      {
        en: {
          head: '8. User-Generated Content',
          body: `<p>8.1 The Service allows you to create, upload, and store your own content, such as text affirmations and visualizations, recorded audio, images, videos, and background music ("User Content").</p>
<p>8.2 You retain all rights you hold in your User Content. You grant us a simple (non-exclusive), worldwide, royalty-free licence to host, store, reproduce, adapt (for example, format and resize), and display your User Content solely to the extent technically necessary to operate, provide, and maintain the Service for you. This licence ends when you delete the relevant User Content or your account, except where retention is required by law or for backups that are deleted in the ordinary course.</p>
<p>8.3 You are responsible for your User Content. You represent and warrant that you hold all necessary rights to your User Content and that it does not infringe the rights of any third party (including copyright, trademark, personality, or privacy rights) and does not violate applicable law.</p>
<p>8.4 You must not upload, create, store, or share content that:</p>
<ul>
<li>(a) is unlawful, infringing, defamatory, harassing, hateful, discriminatory, violent, or pornographic;</li>
<li>(b) infringes intellectual property rights or other rights of third parties;</li>
<li>(c) contains malware or is intended to disrupt or gain unauthorised access to systems;</li>
<li>(d) is false or misleading in a way that may cause harm; or</li>
<li>(e) otherwise violates these Terms or applicable law.</li>
</ul>
<p>8.5 We do not generally pre-screen User Content and are not obligated to do so. However, where we become aware of unlawful User Content, we may remove or block access to it and, where appropriate, take further measures in accordance with applicable law (including the EU Digital Services Act and the German Digital Services Act, DDG). We will act in a manner proportionate to the circumstances and, where required by law, inform you of relevant measures.</p>`,
        },
        de: {
          head: '8. Nutzergenerierte Inhalte',
          body: `<p>8.1 Der Dienst ermöglicht es dir, eigene Inhalte zu erstellen, hochzuladen und zu speichern, etwa Text-Affirmationen und Visualisierungen, aufgenommene Audiodateien, Bilder, Videos und Hintergrundmusik („Nutzerinhalte").</p>
<p>8.2 Du behältst alle Rechte, die dir an deinen Nutzerinhalten zustehen. Du gewährst uns ein einfaches (nicht ausschließliches), weltweites, unentgeltliches Recht, deine Nutzerinhalte zu hosten, zu speichern, zu vervielfältigen, anzupassen (zum Beispiel zu formatieren und in der Größe zu ändern) und anzuzeigen, ausschließlich soweit dies technisch erforderlich ist, um den Dienst für dich zu betreiben, bereitzustellen und zu warten. Dieses Recht endet, wenn du die betreffenden Nutzerinhalte oder dein Konto löschst, außer soweit eine Aufbewahrung gesetzlich vorgeschrieben ist oder Backups betrifft, die im üblichen Verlauf gelöscht werden.</p>
<p>8.3 Du bist für deine Nutzerinhalte verantwortlich. Du sicherst zu und gewährleistest, dass du alle erforderlichen Rechte an deinen Nutzerinhalten besitzt und dass diese keine Rechte Dritter verletzen (einschließlich Urheber-, Marken-, Persönlichkeits- oder Datenschutzrechte) und nicht gegen geltendes Recht verstoßen.</p>
<p>8.4 Du darfst keine Inhalte hochladen, erstellen, speichern oder teilen, die:</p>
<ul>
<li>(a) rechtswidrig, rechtsverletzend, verleumderisch, belästigend, hetzerisch, diskriminierend, gewalttätig oder pornografisch sind;</li>
<li>(b) Rechte des geistigen Eigentums oder sonstige Rechte Dritter verletzen;</li>
<li>(c) Schadsoftware enthalten oder darauf abzielen, Systeme zu stören oder sich unbefugten Zugang zu ihnen zu verschaffen;</li>
<li>(d) in schädigender Weise falsch oder irreführend sind; oder</li>
<li>(e) anderweitig gegen diese AGB oder geltendes Recht verstoßen.</li>
</ul>
<p>8.5 Wir prüfen Nutzerinhalte in der Regel nicht vorab und sind dazu auch nicht verpflichtet. Sobald wir jedoch von rechtswidrigen Nutzerinhalten Kenntnis erlangen, können wir sie entfernen oder den Zugang zu ihnen sperren und, sofern angemessen, weitere Maßnahmen im Einklang mit geltendem Recht ergreifen (einschließlich des Digital Services Act der EU und des deutschen Digitale-Dienste-Gesetzes, DDG). Wir handeln in einer den Umständen angemessenen Weise und informieren dich, soweit gesetzlich vorgeschrieben, über entsprechende Maßnahmen.</p>`,
        },
      },
      {
        en: {
          head: '9. AI-Generated Content',
          body: `<p>9.1 The Service offers AI-assisted generation of text content (for example, affirmations and visualizations) based on the input you provide. This feature is powered by third-party artificial-intelligence models.</p>
<p>9.2 AI-generated content is produced automatically and may be inaccurate, incomplete, generic, or unsuitable for your individual situation. We do not guarantee that AI-generated content is correct, original, free of third-party rights, or fit for any particular purpose. You are responsible for reviewing AI-generated content before relying on or sharing it.</p>
<p>9.3 AI-generated content must never be understood as medical, psychological, therapeutic, legal, financial, or other professional advice (see Section 13).</p>
<p>9.4 The availability and scope of AI features may be subject to monthly usage limits depending on your access tier, as described in the app. We may adjust these limits and the underlying AI models for the future for legitimate reasons, including cost and technical considerations.</p>
<p>9.5 You must not use the AI features to generate content that violates Section 8.4 or to attempt to extract, reverse engineer, or misuse the underlying models.</p>`,
        },
        de: {
          head: '9. KI-generierte Inhalte',
          body: `<p>9.1 Der Dienst bietet eine KI-gestützte Erstellung von Textinhalten (zum Beispiel Affirmationen und Visualisierungen) auf Grundlage deiner Eingaben. Diese Funktion wird durch Modelle künstlicher Intelligenz Dritter ermöglicht.</p>
<p>9.2 KI-generierte Inhalte werden automatisch erzeugt und können ungenau, unvollständig, allgemein gehalten oder für deine individuelle Situation ungeeignet sein. Wir gewährleisten nicht, dass KI-generierte Inhalte richtig, originär, frei von Rechten Dritter oder für einen bestimmten Zweck geeignet sind. Du bist dafür verantwortlich, KI-generierte Inhalte zu prüfen, bevor du dich auf sie verlässt oder sie teilst.</p>
<p>9.3 KI-generierte Inhalte dürfen niemals als medizinische, psychologische, therapeutische, rechtliche, finanzielle oder sonstige professionelle Beratung verstanden werden (siehe Abschnitt 13).</p>
<p>9.4 Verfügbarkeit und Umfang der KI-Funktionen können je nach deiner Zugangsstufe monatlichen Nutzungslimits unterliegen, wie in der App beschrieben. Wir können diese Limits und die zugrunde liegenden KI-Modelle für die Zukunft aus berechtigten Gründen anpassen, einschließlich Kosten- und technischer Erwägungen.</p>
<p>9.5 Du darfst die KI-Funktionen nicht nutzen, um Inhalte zu erzeugen, die gegen Abschnitt 8.4 verstoßen, oder um zu versuchen, die zugrunde liegenden Modelle zu extrahieren, zurückzuentwickeln oder zu missbrauchen.</p>`,
        },
      },
      {
        en: {
          head: '10. Intellectual Property and Licence to Use the Service',
          body: `<p>10.1 The Service, including the app, its software, design, built-in content (such as curated affirmations, visualizations, resources, images, and audio), trademarks, and the "Neomind" name and logo, is protected by intellectual property rights and remains our property or that of our licensors.</p>
<p>10.2 Subject to your compliance with these Terms, we grant you a simple (non-exclusive), non-transferable, revocable, personal licence to use the Service and its built-in content for your own private, non-commercial purposes for the duration of your contract.</p>
<p>10.3 You may not, except as expressly permitted by these Terms or mandatory law: copy, distribute, publicly perform, sell, sublicense, rent, modify, decompile, disassemble, or reverse engineer the Service or its built-in content; remove proprietary notices; or use the Service or its content to build or train a competing product or AI model.</p>`,
        },
        de: {
          head: '10. Geistiges Eigentum und Lizenz zur Nutzung des Dienstes',
          body: `<p>10.1 Der Dienst, einschließlich der App, ihrer Software, ihres Designs, der integrierten Inhalte (wie kuratierte Affirmationen, Visualisierungen, Ressourcen, Bilder und Audiodateien), der Marken sowie des Namens und Logos „Neomind", ist durch Rechte des geistigen Eigentums geschützt und bleibt unser Eigentum oder das unserer Lizenzgeber.</p>
<p>10.2 Vorbehaltlich deiner Einhaltung dieser AGB gewähren wir dir ein einfaches (nicht ausschließliches), nicht übertragbares, widerrufliches, persönliches Recht, den Dienst und seine integrierten Inhalte für deine eigenen privaten, nicht-kommerziellen Zwecke für die Dauer deines Vertrags zu nutzen.</p>
<p>10.3 Soweit nicht durch diese AGB oder zwingendes Recht ausdrücklich gestattet, darfst du den Dienst oder seine integrierten Inhalte nicht: kopieren, verbreiten, öffentlich wiedergeben, verkaufen, unterlizenzieren, vermieten, verändern, dekompilieren, disassemblieren oder zurückentwickeln; Schutzrechtshinweise entfernen; oder den Dienst oder seine Inhalte nutzen, um ein konkurrierendes Produkt oder KI-Modell zu erstellen oder zu trainieren.</p>`,
        },
      },
      {
        en: {
          head: '11. Statutory Rights Regarding Digital Products',
          body: `<p>11.1 As a consumer, you are entitled to the statutory rights regarding digital products (digitale Produkte) under Sections 327 et seq. of the German Civil Code (BGB), including in respect of the provision of the Service in conformity with the contract and updates necessary to maintain conformity.</p>
<p>11.2 We will provide you with updates, including security updates, that are necessary to keep the contractually owed Service in conformity, and we will inform you about such updates as required by law. If you fail to install provided updates within a reasonable period, we are not liable for any lack of conformity resulting solely from the missing update, provided we informed you of the update and the consequences of not installing it.</p>`,
        },
        de: {
          head: '11. Gesetzliche Rechte in Bezug auf digitale Produkte',
          body: `<p>11.1 Als Verbraucher stehen dir die gesetzlichen Rechte in Bezug auf digitale Produkte nach §§ 327 ff. des Bürgerlichen Gesetzbuchs (BGB) zu, einschließlich hinsichtlich der vertragsgemäßen Bereitstellung des Dienstes und der zur Erhaltung der Vertragsmäßigkeit erforderlichen Aktualisierungen.</p>
<p>11.2 Wir stellen dir Aktualisierungen einschließlich Sicherheitsaktualisierungen bereit, die erforderlich sind, um den vertraglich geschuldeten Dienst vertragsgemäß zu halten, und informieren dich über solche Aktualisierungen, soweit gesetzlich vorgeschrieben. Wenn du bereitgestellte Aktualisierungen nicht innerhalb eines angemessenen Zeitraums installierst, haften wir nicht für einen Mangel, der allein auf der fehlenden Aktualisierung beruht, sofern wir dich über die Aktualisierung und die Folgen einer unterlassenen Installation informiert haben.</p>`,
        },
      },
      {
        en: {
          head: '12. Availability and Changes to the Service',
          body: `<p>12.1 We make reasonable efforts to keep the Service available but do not guarantee uninterrupted or error-free availability. Availability may be limited by maintenance, technical issues, or factors outside our control (for example, App Store platforms, network operators, or third-party providers such as cloud, AI, and payment services).</p>
<p>12.2 We may modify, further develop, or discontinue the Service or individual features for legitimate reasons. Beyond changes necessary to maintain conformity (Section 11), we may make further changes to the Service in accordance with the statutory requirements for changes to digital products, in particular where the change is reasonable for you; where a change significantly and negatively affects your access to or use of the Service, we will inform you within a reasonable period and, where the law grants it, you may have the right to terminate the contract.</p>`,
        },
        de: {
          head: '12. Verfügbarkeit und Änderungen des Dienstes',
          body: `<p>12.1 Wir bemühen uns in angemessener Weise, den Dienst verfügbar zu halten, gewährleisten jedoch keine ununterbrochene oder fehlerfreie Verfügbarkeit. Die Verfügbarkeit kann durch Wartung, technische Probleme oder Faktoren außerhalb unseres Einflussbereichs eingeschränkt sein (zum Beispiel App-Store-Plattformen, Netzbetreiber oder Drittanbieter wie Cloud-, KI- und Zahlungsdienste).</p>
<p>12.2 Wir können den Dienst oder einzelne Funktionen aus berechtigten Gründen ändern, weiterentwickeln oder einstellen. Über zur Erhaltung der Vertragsmäßigkeit erforderliche Änderungen hinaus (Abschnitt 11) können wir weitere Änderungen am Dienst im Einklang mit den gesetzlichen Anforderungen für Änderungen digitaler Produkte vornehmen, insbesondere soweit die Änderung für dich zumutbar ist; soweit eine Änderung deinen Zugang zum oder deine Nutzung des Dienstes erheblich und nachteilig beeinträchtigt, informieren wir dich innerhalb eines angemessenen Zeitraums, und du hast, soweit das Gesetz dies gewährt, möglicherweise das Recht, den Vertrag zu kündigen.</p>`,
        },
      },
      {
        en: {
          head: '13. Health and Medical Disclaimer',
          body: `<p>13.1 Neomind is a self-help and personal-development product intended for general wellbeing and mindset habits. It is NOT a medical device and does NOT provide medical, psychological, psychotherapeutic, diagnostic, or treatment services.</p>
<p>13.2 The content of the Service, including built-in and AI-generated affirmations and visualizations, is for informational and motivational purposes only. It is not a substitute for professional medical or psychological advice, diagnosis, or treatment.</p>
<p>13.3 Always seek the advice of a qualified physician, psychotherapist, or other qualified health provider with any questions you may have regarding a medical or mental-health condition. Never disregard professional advice or delay seeking it because of something you have read or experienced in the Service.</p>
<p>13.4 If you are experiencing a medical or mental-health emergency, contact your local emergency services immediately (in Germany: 112).</p>`,
        },
        de: {
          head: '13. Gesundheitlicher und medizinischer Haftungsausschluss',
          body: `<p>13.1 Neomind ist ein Selbsthilfe- und Persönlichkeitsentwicklungsprodukt für das allgemeine Wohlbefinden und Mindset-Gewohnheiten. Es ist KEIN Medizinprodukt und bietet KEINE medizinischen, psychologischen, psychotherapeutischen, diagnostischen oder Behandlungsleistungen.</p>
<p>13.2 Die Inhalte des Dienstes, einschließlich integrierter und KI-generierter Affirmationen und Visualisierungen, dienen ausschließlich Informations- und Motivationszwecken. Sie ersetzen keine professionelle medizinische oder psychologische Beratung, Diagnose oder Behandlung.</p>
<p>13.3 Hole bei allen Fragen zu einer körperlichen oder psychischen Erkrankung stets den Rat einer qualifizierten Ärztin oder eines qualifizierten Arztes, einer Psychotherapeutin oder eines Psychotherapeuten oder einer anderen qualifizierten Gesundheitsfachperson ein. Missachte professionellen Rat niemals und zögere nicht, ihn einzuholen, wegen etwas, das du im Dienst gelesen oder erlebt hast.</p>
<p>13.4 Wenn du dich in einem medizinischen oder psychischen Notfall befindest, kontaktiere sofort den örtlichen Rettungsdienst (in Deutschland: 112).</p>`,
        },
      },
      {
        en: {
          head: '14. Obligations of the User',
          body: `<p>You agree:</p>
<ul>
<li>(a) to use the Service only in accordance with these Terms and applicable law;</li>
<li>(b) not to interfere with, overload, or compromise the security or integrity of the Service or its infrastructure;</li>
<li>(c) not to use automated means to access the Service in a manner that places an unreasonable load on it, except as expressly permitted;</li>
<li>(d) not to circumvent access restrictions, subscription controls, or usage limits; and</li>
<li>(e) to keep your account credentials secure (Section 3).</li>
</ul>`,
        },
        de: {
          head: '14. Pflichten des Nutzers',
          body: `<p>Du verpflichtest dich:</p>
<ul>
<li>(a) den Dienst nur im Einklang mit diesen AGB und geltendem Recht zu nutzen;</li>
<li>(b) die Sicherheit oder Integrität des Dienstes oder seiner Infrastruktur nicht zu beeinträchtigen, zu überlasten oder zu gefährden;</li>
<li>(c) keine automatisierten Mittel zu verwenden, um auf den Dienst in einer Weise zuzugreifen, die ihn unangemessen belastet, sofern nicht ausdrücklich gestattet;</li>
<li>(d) Zugangsbeschränkungen, Abonnementkontrollen oder Nutzungslimits nicht zu umgehen; und</li>
<li>(e) deine Kontozugangsdaten sicher zu verwahren (Abschnitt 3).</li>
</ul>`,
        },
      },
      {
        en: {
          head: '15. Liability',
          body: `<p>15.1 We are liable without limitation for damages arising from injury to life, body, or health that are based on a negligent or intentional breach of duty by us, our legal representatives, or our vicarious agents, as well as for damages based on an intentional or grossly negligent breach of duty.</p>
<p>15.2 For damages caused by slight (ordinary) negligence, we are liable only in the event of a breach of a material contractual obligation (a so-called cardinal obligation, i.e. an obligation the fulfilment of which is essential for the proper performance of the contract and on the observance of which you may regularly rely). In such cases, our liability is limited to the foreseeable damage typical for this type of contract.</p>
<p>15.3 Any further liability for slight negligence is excluded.</p>
<p>15.4 The above limitations do not apply to liability under the German Product Liability Act (Produkthaftungsgesetz), to liability arising from the assumption of a guarantee, or to the extent we have fraudulently concealed a defect.</p>
<p>15.5 To the extent our liability is excluded or limited, this also applies to the personal liability of our legal representatives, employees, and vicarious agents.</p>
<p>15.6 We are not responsible for the services, terms, availability, billing, or refunds of the App Stores or other third-party providers, nor for content, products, or services of third parties linked from within the Service.</p>`,
        },
        de: {
          head: '15. Haftung',
          body: `<p>15.1 Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder der Gesundheit, die auf einer fahrlässigen oder vorsätzlichen Pflichtverletzung durch uns, unsere gesetzlichen Vertreter oder unsere Erfüllungsgehilfen beruhen, sowie für Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung beruhen.</p>
<p>15.2 Für Schäden, die durch leichte (einfache) Fahrlässigkeit verursacht werden, haften wir nur bei Verletzung einer wesentlichen Vertragspflicht (sogenannte Kardinalpflicht, d. h. eine Pflicht, deren Erfüllung die ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht und auf deren Einhaltung du regelmäßig vertrauen darfst). In diesen Fällen ist unsere Haftung auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</p>
<p>15.3 Eine weitergehende Haftung für leichte Fahrlässigkeit ist ausgeschlossen.</p>
<p>15.4 Die vorstehenden Beschränkungen gelten nicht für die Haftung nach dem Produkthaftungsgesetz, für die Haftung aus der Übernahme einer Garantie oder soweit wir einen Mangel arglistig verschwiegen haben.</p>
<p>15.5 Soweit unsere Haftung ausgeschlossen oder beschränkt ist, gilt dies auch für die persönliche Haftung unserer gesetzlichen Vertreter, Mitarbeitenden und Erfüllungsgehilfen.</p>
<p>15.6 Wir sind nicht verantwortlich für die Leistungen, Bedingungen, Verfügbarkeit, Abrechnung oder Erstattungen der App Stores oder anderer Drittanbieter, noch für Inhalte, Produkte oder Dienste Dritter, die aus dem Dienst heraus verlinkt sind.</p>`,
        },
      },
      {
        en: {
          head: '16. Changes to these Terms',
          body: `<p>16.1 We may amend these Terms with effect for the future where there is a valid reason, for example because of changes in the legal situation, changes to the Service, or new features.</p>
<p>16.2 We will inform you of any material changes in an appropriate manner (for example, by email or via a notice in the app) at least within a reasonable period before the changes take effect. If your continued use requires your consent under applicable law, we will obtain it. Otherwise, if you do not object to the changes within the period stated in the notice, or if you continue to use the Service after the changes take effect, the amended Terms are deemed accepted. We will specifically point out the meaning of your silence or continued use in the notice. If you object, we may terminate the contract in accordance with the statutory provisions; your existing rights remain unaffected.</p>`,
        },
        de: {
          head: '16. Änderungen dieser AGB',
          body: `<p>16.1 Wir können diese AGB mit Wirkung für die Zukunft ändern, wenn ein triftiger Grund vorliegt, zum Beispiel aufgrund von Änderungen der Rechtslage, Änderungen des Dienstes oder neuer Funktionen.</p>
<p>16.2 Wir informieren dich über wesentliche Änderungen in geeigneter Weise (zum Beispiel per E-Mail oder über einen Hinweis in der App) mindestens innerhalb eines angemessenen Zeitraums vor Wirksamwerden der Änderungen. Soweit deine weitere Nutzung nach geltendem Recht deine Zustimmung erfordert, holen wir diese ein. Andernfalls gelten die geänderten AGB als angenommen, wenn du den Änderungen nicht innerhalb der im Hinweis genannten Frist widersprichst oder den Dienst nach Wirksamwerden der Änderungen weiter nutzt. Auf die Bedeutung deines Schweigens oder deiner weiteren Nutzung weisen wir im Hinweis ausdrücklich hin. Wenn du widersprichst, können wir den Vertrag nach den gesetzlichen Bestimmungen kündigen; deine bestehenden Rechte bleiben unberührt.</p>`,
        },
      },
      {
        en: {
          head: '17. Term, Termination, and Account Deletion',
          body: `<p>17.1 The contract for use of the free tier runs for an indefinite period and may be terminated by either party at any time. You may terminate by deleting your account.</p>
<p>17.2 The term and renewal of paid subscriptions are governed by Section 5.</p>
<p>17.3 <strong>Account deletion.</strong> You may delete your account at any time using the account deletion function in the app. Deleting your account ends your contract for the free tier and removes or anonymises your User Content in accordance with our Privacy Policy and applicable law. Important: deleting your account does NOT by itself cancel an active paid subscription. You must cancel any active subscription separately through the relevant App Store (Section 5.5).</p>
<p>17.4 The right of both parties to terminate the contract for good cause without notice remains unaffected. We may, in particular, suspend or terminate your access for good cause if you materially breach these Terms, including by uploading unlawful content (Section 8) or misusing the Service.</p>`,
        },
        de: {
          head: '17. Laufzeit, Kündigung und Kontolöschung',
          body: `<p>17.1 Der Vertrag über die Nutzung der kostenlosen Stufe läuft auf unbestimmte Zeit und kann von beiden Parteien jederzeit gekündigt werden. Du kannst kündigen, indem du dein Konto löschst.</p>
<p>17.2 Laufzeit und Verlängerung kostenpflichtiger Abonnements richten sich nach Abschnitt 5.</p>
<p>17.3 <strong>Kontolöschung.</strong> Du kannst dein Konto jederzeit über die Kontolöschfunktion in der App löschen. Das Löschen deines Kontos beendet deinen Vertrag über die kostenlose Stufe und entfernt oder anonymisiert deine Nutzerinhalte im Einklang mit unserer Datenschutzerklärung und geltendem Recht. Wichtig: Das Löschen deines Kontos kündigt ein aktives kostenpflichtiges Abonnement für sich genommen NICHT. Du musst ein aktives Abonnement separat über den jeweiligen App Store kündigen (Abschnitt 5.5).</p>
<p>17.4 Das Recht beider Parteien zur fristlosen Kündigung des Vertrags aus wichtigem Grund bleibt unberührt. Wir können insbesondere deinen Zugang aus wichtigem Grund aussetzen oder beenden, wenn du erheblich gegen diese AGB verstößt, etwa durch das Hochladen rechtswidriger Inhalte (Abschnitt 8) oder den Missbrauch des Dienstes.</p>`,
        },
      },
      {
        en: {
          head: '18. Data Protection',
          body: `<p>18.1 We process personal data in accordance with applicable data protection law, in particular the EU General Data Protection Regulation (GDPR) and the German Federal Data Protection Act (BDSG).</p>
<p>18.2 Details on how we collect, use, and protect your personal data, including information about the use of analytics and other tracking technologies and any third-party services we may use now or in the future, are set out in our Privacy Policy, available in the app and at https://getneomind.com. The Privacy Policy forms part of the information you should read together with these Terms.</p>`,
        },
        de: {
          head: '18. Datenschutz',
          body: `<p>18.1 Wir verarbeiten personenbezogene Daten im Einklang mit dem geltenden Datenschutzrecht, insbesondere der EU-Datenschutz-Grundverordnung (DSGVO) und dem Bundesdatenschutzgesetz (BDSG).</p>
<p>18.2 Einzelheiten dazu, wie wir deine personenbezogenen Daten erheben, nutzen und schützen, einschließlich Informationen über den Einsatz von Analyse- und anderen Tracking-Technologien sowie etwaiger Drittanbieterdienste, die wir jetzt oder künftig nutzen, sind in unserer Datenschutzerklärung dargelegt, die in der App und unter https://getneomind.com verfügbar ist. Die Datenschutzerklärung ist Teil der Informationen, die du zusammen mit diesen AGB lesen solltest.</p>`,
        },
      },
      {
        en: {
          head: '19. Consumer Dispute Resolution',
          body: `<p>19.1 We are neither obligated nor willing to participate in dispute resolution proceedings before a consumer arbitration board (Verbraucherschlichtungsstelle) within the meaning of the German Act on Alternative Dispute Resolution in Consumer Matters (VSBG).</p>
<p>19.2 The European Commission's Online Dispute Resolution (ODR) platform ceased operation on 20 July 2025 and is therefore no longer referenced here.</p>`,
        },
        de: {
          head: '19. Verbraucherstreitbeilegung',
          body: `<p>19.1 Wir sind weder verpflichtet noch bereit, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle im Sinne des Verbraucherstreitbeilegungsgesetzes (VSBG) teilzunehmen.</p>
<p>19.2 Die Online-Streitbeilegungs-Plattform (OS-Plattform) der Europäischen Kommission wurde zum 20. Juli 2025 eingestellt und wird daher hier nicht mehr angegeben.</p>`,
        },
      },
      {
        en: {
          head: '20. Final Provisions',
          body: `<p>20.1 <strong>Governing law.</strong> These Terms and the contractual relationship between you and us are governed by the law of the Federal Republic of Germany, excluding the UN Convention on Contracts for the International Sale of Goods (CISG). If you are a consumer, this choice of law does not deprive you of the protection afforded to you by mandatory provisions of the law of the country in which you have your habitual residence.</p>
<p>20.2 <strong>Severability.</strong> Should any provision of these Terms be or become invalid or unenforceable, the validity of the remaining provisions shall remain unaffected. The invalid or unenforceable provision shall be replaced by the applicable statutory provisions.</p>
<p>20.3 <strong>No assignment by user.</strong> You may not assign or transfer your rights or obligations under these Terms without our prior written consent.</p>
<p>20.4 <strong>Contact.</strong> For any questions regarding these Terms or the Service, please contact us at: <a href="mailto:neomind.help@gmail.com">neomind.help@gmail.com</a>.</p>`,
        },
        de: {
          head: '20. Schlussbestimmungen',
          body: `<p>20.1 <strong>Anwendbares Recht.</strong> Diese AGB und das Vertragsverhältnis zwischen dir und uns unterliegen dem Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts (CISG). Bist du Verbraucher, so entzieht dir diese Rechtswahl nicht den Schutz, der dir durch zwingende Bestimmungen des Rechts des Landes gewährt wird, in dem du deinen gewöhnlichen Aufenthalt hast.</p>
<p>20.2 <strong>Salvatorische Klausel.</strong> Sollte eine Bestimmung dieser AGB unwirksam oder undurchführbar sein oder werden, bleibt die Wirksamkeit der übrigen Bestimmungen unberührt. Die unwirksame oder undurchführbare Bestimmung wird durch die geltenden gesetzlichen Bestimmungen ersetzt.</p>
<p>20.3 <strong>Keine Abtretung durch den Nutzer.</strong> Du darfst deine Rechte oder Pflichten aus diesen AGB nicht ohne unsere vorherige schriftliche Zustimmung abtreten oder übertragen.</p>
<p>20.4 <strong>Kontakt.</strong> Bei Fragen zu diesen AGB oder zum Dienst kontaktiere uns bitte unter: <a href="mailto:neomind.help@gmail.com">neomind.help@gmail.com</a>.</p>`,
        },
      },
    ],
  },
};
