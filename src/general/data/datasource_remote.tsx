import { collection, getDocs } from "firebase/firestore";
import { db } from "../../db/firebase";

export function getDataRemote() {
	return getDocs( collection( db, 'education' ));
}

export function getCertificateRemote() {
	return getDocs( collection( db, 'certificate' ));
}

export function getPortafolioRemote() {
	return getDocs( collection( db, 'portafolio' ));
}

export function getExperienceWordRemote() {
	return getDocs( collection( db, 'experiencia-laboral' ));
}