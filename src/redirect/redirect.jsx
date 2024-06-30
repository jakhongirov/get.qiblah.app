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
			if (
				campaign_id == 'times' ||
				campaign_id == 'quran' ||
				campaign_id == 'names' ||
				campaign_id == 'adhkar' ||
				campaign_id == 'app'
			) {
				window.location.href = ` https://play.google.com/store/apps/details?id=com.namoz.organish&pcampaignid=share_${campaign_id}`;
			} else {
				window.location.href = ` https://play.google.com/store/apps/details?id=com.namoz.organish&pcampaignid=${
					campaign_id ? campaign_id : 'noparam'
				}`;
			}
		}
		// If the device is not iOS or Android, you can handle it differently or redirect to a generic page
		else {
			// Redirect to a generic page
			window.location.href = ` https://play.google.com/store/apps/details?id=com.namoz.organish&pcampaignid=${
				campaign_id ? campaign_id : 'noparam'
			}`;
		}
	}, [campaign_id]);

	return <></>;
}

export default Redirect;
