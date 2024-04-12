import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Redirect() {
	const { campaign_id } = useParams();

	useEffect(() => {
		// Check if the user is using an iOS device
		if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
			window.location.href = 'https://qiblah.app'; // Replace with your App Store link
		}
		// Check if the user is using an Android device
		else if (/Android/i.test(navigator.userAgent)) {
			window.location.href = `https://play.google.com/store/apps/details?id=uz.behad.qiblah.namoz&pcampaignid=${campaign_id}`; // Replace with your Google Play link and package name
		}
		// If the device is not iOS or Android, you can handle it differently or redirect to a generic page
		else {
			// Redirect to a generic page
			window.location.href = `https://play.google.com/store/apps/details?id=uz.behad.qiblah.namoz&pcampaignid=${campaign_id}`;
		}
	}, [campaign_id]);

	return <></>;
}

export default Redirect;
