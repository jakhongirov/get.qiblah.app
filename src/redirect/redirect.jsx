import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Redirect() {
	const { param1, param2 } = useParams();

	useEffect(() => {
		if (/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
			window.location.href = 'https://qiblah.app';
		} else if (/Android/i.test(navigator.userAgent)) {
			if (param1 && param2) {
				if (
					param2 == 'times' ||
					param2 == 'quran' ||
					param2 == 'names' ||
					param2 == 'adhkar' ||
					param2 == 'app'
				) {
					window.location.href = `https://play.google.com/store/apps/details?id=com.namoz.organish&referrer=utm_source%3D${
						param1 ? 'fromAppShares' : ''
					}%26utm_medium%3D${param2 ? param2 : ''}`;
				} else {
					window.location.href = `https://play.google.com/store/apps/details?id=com.namoz.organish&referrer=utm_source%3D${param1}%26utm_medium%3D${param2}`;
				}
			} else if (param2) {
				if (
					param2 == 'times' ||
					param2 == 'quran' ||
					param2 == 'names' ||
					param2 == 'adhkar' ||
					param2 == 'app'
				) {
					window.location.href = `https://play.google.com/store/apps/details?id=com.namoz.organish&referrer=utm_source%3D${'fromAppShares'}%26utm_medium%3D${param2}`;
				} else {
					window.location.href = `https://play.google.com/store/apps/details?id=com.namoz.organish&referrer=utm_source%3D${"noparam"}%26utm_medium%3D${param2}`;
				}
			}
		} else {
			window.location.href = `https://play.google.com/store/apps/details?id=com.namoz.organish&referrer=utm_source%3D${
				param1 ? param1 : 'noparam'
			}%26utm_medium%3D${param2 ? param2 : 'noparam'}`;
		}
	}, [param1, param2]);

	return <></>;
}

export default Redirect;
