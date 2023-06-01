<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u875787398_1yOjY' );

/** Database username */
define( 'DB_USER', 'u875787398_wW6hm' );

/** Database password */
define( 'DB_PASSWORD', 'v40ozAJcIj' );

/** Database hostname */
define( 'DB_HOST', '127.0.0.1' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          'AnRKMEk+?y|PzV55.EsccX[(seCpto.XwkpDc<u ,=(1@@[2~R!!7$7/+av;a:&~' );
define( 'SECURE_AUTH_KEY',   'h91!UJ5&[ .,D(t<8<`q,!1X9pR^b)x:}x4apwjqHalm(74lNs@<1Z+bgAu}OZxX' );
define( 'LOGGED_IN_KEY',     'k}o,)FHKRI~Ipl:e!c`;0Hwh@C>mC4L{bxo$G`L|`QoP(wsHamBFtf@>k.*FX#Un' );
define( 'NONCE_KEY',         'SWr<S2NPF,i~fcyTUz<^,3(Sp1X_3Mrk`.SA%2&B))mnIN_?fH#=_9=Ky>dd7(aZ' );
define( 'AUTH_SALT',         '4h,q54su@1xFX}Q>(,?Pm.!9iIb8G$_e12HyOew)zI<@](gCBv,d]+W~:>9%#xfI' );
define( 'SECURE_AUTH_SALT',  '0!vWy^${D~{{-8K<`K8eRql]hS}30>gf#&/^x+&6D<1Bhw~5H%#nuqT;Iz`2g@Xu' );
define( 'LOGGED_IN_SALT',    '5c] og<1IAXRe]j|2PZA|_gdqJ.onm:gSSXZu&L@I;w?,P~:#CX8#FJ3(Z3G@wj;' );
define( 'NONCE_SALT',        '2D-j5<H=.nba+** %&!!*ttW$j<SvWPz:&!YoUe+!C_&p=NjkGWA&y@z>Nb6&:`/' );
define( 'WP_CACHE_KEY_SALT', 'jC58fjxUmCjZDS>WP%;TQ@`fXA]p#$LXbwPnS0G@Ck3,4uQCT~[JF02;YGR,(1c9' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );


/* Add any custom values between this line and the "stop editing" line. */



define( 'FS_METHOD', 'direct' );
define( 'WP_AUTO_UPDATE_CORE', 'minor' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
