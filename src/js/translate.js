import { getLanguageTexts } from './api';
import { navbarDOM, paragraphDOM } from './intoDOM';

async function changeLanguage(lang) {
	const object = await getLanguageTexts();
	const defaultLanguage = lang || object.default_language.toUpperCase() || 'ES'
	const objectLang = object[defaultLanguage];

	const { personal_information } = objectLang;
	// First Look in page
	const sloganTitle = document.querySelector('.slogan__title');
	const sloganArr = document.querySelector('.slogan__text');
	const sloganProfession = document.querySelector('.slogan__profession');
	const authorParagraph = document.querySelector('.firstlook__paragraph');
	sloganTitle.textContent = personal_information.slogan_title;
	sloganArr.textContent = '';
	sloganProfession.textContent = personal_information.profession;
	authorParagraph.textContent = personal_information.description;

	// Setion Titles
	const { sectionTitle } = objectLang;
	document.querySelector('.title__projects').textContent = sectionTitle[0];
	document.querySelector('.title__technologies').textContent =
		sectionTitle[1];
	document.querySelector('.title__info').textContent = sectionTitle[2];

	// Info Section
	const { about } = objectLang;
    paragraphDOM(about)
    navbarDOM(objectLang.navbar, object)



	// Variety
	// ==== Loaders
	document.querySelector('.loading__more--text').innerText = objectLang.variety.loader[0]
	document.querySelector('.loading__expandall--text').textContent = objectLang.variety.loader[1]
	document.querySelector('.loading__fullprojects--text').textContent = objectLang.variety.loader[2]
	// Loaded Message
	document.querySelector('.loading__complete').textContent = objectLang.variety.loader[3]
	// ==== Input search project
	document.querySelector('.form__input').placeholder = objectLang.variety.inputFilter


    return {object, objectLang}
}
export default changeLanguage;
