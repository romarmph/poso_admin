INSERT INTO "public"."roles" ("id", "role") VALUES
	(1, 'superadmin'),
	(2, 'staff'),
	(3, 'enforcer'),
	(4, 'taskforce'),
	(5, 'taskforce_clearing');

--
-- Data for Name: employees; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."employees" ("first_name", "last_name", "status", "created_at", "updated_at", "deleted_at", "created_by", "updated_by", "deleted_by", "role", "user_id") VALUES
	('Marbert', 'Cerda', 'active', '2024-04-25 16:43:01.513+00', '2024-04-25 16:43:01.513+00', NULL, 2, 2, NULL, 3, NULL),
	('Erwin', 'Castillo', 'active', '2024-04-26 01:13:41.158+00', '2024-04-26 01:13:41.158+00', NULL, 2, 2, NULL, 3, NULL),
	('Jovani', 'Tani', 'active', '2024-04-26 01:15:10.249+00', '2024-04-26 01:15:10.249+00', NULL, 2, 2, NULL, 3, NULL),
	('Hernard', 'Fajardo', 'active', '2024-04-26 01:16:26.531+00', '2024-04-26 01:16:26.531+00', NULL, 2, 2, NULL, 3, NULL),
	('GB', 'Duyag', 'active', '2024-04-26 01:17:17.835+00', '2024-04-26 01:17:17.835+00', NULL, 2, 2, NULL, 3, NULL),
	('Albert', 'Cabang', 'active', '2024-04-26 01:18:19.07+00', '2024-04-26 01:18:19.07+00', NULL, 2, 2, NULL, 3, NULL),
	('Jorge', 'Javier', 'active', '2024-04-26 01:19:20.518+00', '2024-04-26 01:19:20.518+00', NULL, 2, 2, NULL, 3, NULL),
	('Larry', 'Encarnacion', 'active', '2024-04-26 01:20:18.777+00', '2024-04-26 01:20:18.777+00', NULL, 2, 2, NULL, 3, NULL),
	('Eric', 'Ellasos', 'active', '2024-04-26 01:22:47.666+00', '2024-04-26 01:22:47.666+00', NULL, 2, 2, NULL, 3, NULL),
	('Albert', 'Sunga', 'active', '2024-04-26 01:23:56.373+00', '2024-04-26 01:23:56.373+00', NULL, 2, 2, NULL, 3, NULL),
	('Jimmy', 'Fabro', 'active', '2024-04-26 01:25:35.395+00', '2024-04-26 01:25:35.395+00', NULL, 2, 2, NULL, 3, NULL),
	('Dario', 'Madronio', 'active', '2024-04-26 01:26:49.127+00', '2024-04-26 01:26:49.127+00', NULL, 2, 2, NULL, 3, NULL),
	('Tirso', 'Cacondangan', 'active', '2024-04-26 01:28:00.069+00', '2024-04-26 01:28:00.069+00', NULL, 2, 2, NULL, 3, NULL),
	('Raymund', 'Ollero', 'active', '2024-04-26 01:29:05.111+00', '2024-04-26 01:29:05.111+00', NULL, 2, 2, NULL, 3, NULL),
	('Joel', 'Cacatian', 'active', '2024-04-26 01:30:41.98+00', '2024-04-26 01:30:41.98+00', NULL, 2, 2, NULL, 3, NULL),
	('Arleen', 'Raga', 'active', '2024-04-26 01:31:22.532+00', '2024-04-26 01:31:22.532+00', NULL, 2, 2, NULL, 3, NULL),
	('Ronelo', 'Lapena', 'active', '2024-04-26 01:32:24.173+00', '2024-04-26 01:32:24.173+00', NULL, 2, 2, NULL, 3, NULL),
	('Marvin', 'Acosta', 'active', '2024-04-26 01:33:22.338+00', '2024-04-26 01:33:22.338+00', NULL, 2, 2, NULL, 3, NULL),
	('Jun Jun', 'Mamaradlo', 'active', '2024-04-26 01:34:12.72+00', '2024-04-26 01:34:12.72+00', NULL, 2, 2, NULL, 3, NULL),
	('Jerry', 'Corales', 'active', '2024-04-26 01:35:54.295+00', '2024-04-26 01:35:54.295+00', NULL, 2, 2, NULL, 3, NULL),
	('Diosdado', 'Adviento', 'active', '2024-04-26 01:35:05.367+00', '2024-04-26 01:36:49.746+00', NULL, 2, 2, NULL, 3, NULL),
	('Mike', 'Tabobo', 'active', '2024-04-26 01:37:59.637+00', '2024-04-26 01:38:52.994+00', NULL, 2, 2, NULL, 3, NULL),
	('Marlon', 'Figuracion', 'active', '2024-04-26 01:40:30.475+00', '2024-04-26 01:40:30.475+00', NULL, 2, 2, NULL, 3, NULL),
	('John John', 'Cortez', 'active', '2024-04-26 01:41:36.724+00', '2024-04-26 01:41:36.724+00', NULL, 2, 2, NULL, 3, NULL),
	('Julius', 'Tabion', 'active', '2024-04-26 01:45:28.585+00', '2024-04-26 01:47:50.07+00', NULL, 2, 2, NULL, 3, NULL),
	('Princess', 'Raquiza', 'active', '2024-04-26 01:48:39.569+00', '2024-04-26 01:48:39.569+00', NULL, 2, 2, NULL, 3, NULL),
	('Mario', 'Tabilin', 'active', '2024-04-26 01:50:34.907+00', '2024-04-26 01:50:34.907+00', NULL, 2, 2, NULL, 3, NULL),
	('Noel', 'Fernandez', 'active', '2024-04-26 01:51:45.311+00', '2024-04-26 01:51:45.311+00', NULL, 2, 2, NULL, 3, NULL),
	('Marvin', 'Rincoraya', 'active', '2024-04-26 01:52:48.924+00', '2024-04-26 01:52:48.924+00', NULL, 2, 2, NULL, 3, NULL),
	('Allan', 'Bajesta', 'active', '2024-04-26 01:53:36.187+00', '2024-04-26 01:53:36.187+00', NULL, 2, 2, NULL, 3, NULL),
	('Rodel', 'Sanchez', 'active', '2024-04-26 01:55:31.099+00', '2024-04-26 01:55:31.099+00', NULL, 2, 2, NULL, 3, NULL),
	('Leandro', 'Dacasin', 'active', '2024-04-26 01:56:39.698+00', '2024-04-26 01:56:39.698+00', NULL, 2, 2, NULL, 3, NULL),
	('Nicomedez', 'Palaylay', 'active', '2024-04-26 01:57:51.281+00', '2024-04-26 01:57:51.281+00', NULL, 2, 2, NULL, 3, NULL),
	('Ildefonso', 'Dumpit', 'active', '2024-04-26 01:58:50.826+00', '2024-04-26 01:58:50.826+00', NULL, 2, 2, NULL, 3, NULL),
	('Jeffrey', 'Reasonda', 'active', '2024-04-26 01:59:52.946+00', '2024-04-26 01:59:52.946+00', NULL, 2, 2, NULL, 3, NULL),
	('Jessie', 'Contaoe', 'active', '2024-04-26 02:00:51.309+00', '2024-04-26 02:00:51.309+00', NULL, 2, 2, NULL, 3, NULL),
	('Benjo', 'Corpuz', 'active', '2024-04-26 02:01:39.348+00', '2024-04-26 02:01:39.348+00', NULL, 2, 2, NULL, 3, NULL),
	('Joel', 'Laguna', 'active', '2024-04-26 02:02:42.675+00', '2024-04-26 02:02:42.675+00', NULL, 2, 2, NULL, 3, NULL),
	('Emil', 'Jimenez', 'active', '2024-04-26 02:04:23.246+00', '2024-04-26 02:04:23.246+00', NULL, 2, 2, NULL, 3, NULL),
	('Gerardo', 'Fajardo', 'active', '2024-04-26 02:05:48.971+00', '2024-04-26 02:05:48.971+00', NULL, 2, 2, NULL, 3, NULL),
	('William', 'Manibog', 'active', '2024-04-26 02:07:09.426+00', '2024-04-26 02:07:09.426+00', NULL, 2, 2, NULL, 3, NULL),
	('Rex', 'Serafica', 'active', '2024-04-26 02:08:07.224+00', '2024-04-26 02:08:07.224+00', NULL, 2, 2, NULL, 3, NULL),
	('Roel', 'Lucena', 'active', '2024-04-26 02:08:54.068+00', '2024-04-26 02:08:54.068+00', NULL, 2, 2, NULL, 3, NULL),
	('Romeo', 'Matibag', 'active', '2024-04-26 02:09:43.297+00', '2024-04-26 02:09:43.297+00', NULL, 2, 2, NULL, 3, NULL),
	('Mariano', 'Lazo', 'active', '2024-04-26 02:10:29.407+00', '2024-04-26 02:10:29.407+00', NULL, 2, 2, NULL, 3, NULL),
	('Johnry', 'Gabertan', 'active', '2024-04-26 02:11:43.126+00', '2024-04-26 02:11:43.126+00', NULL, 2, 2, NULL, 3, NULL),
	('George', 'Torres', 'active', '2024-05-09 05:29:41.569+00', '2024-05-09 05:29:41.569+00', NULL, 2, 2, NULL, 3, NULL),
	('Joel', 'Valencia', 'active', '2024-05-09 05:31:17.83+00', '2024-05-09 05:31:17.83+00', NULL, 2, 2, NULL, 3, NULL),
	('Darwyn', 'Barcolta', 'active', '2024-05-09 05:32:26.809+00', '2024-05-09 05:32:26.809+00', NULL, 2, 2, NULL, 3, NULL),
	('King Ace', 'Parayno', 'active', '2024-05-09 05:34:45.395+00', '2024-05-09 05:34:45.395+00', NULL, 2, 2, NULL, 3, NULL),
	('Jimmy', 'Torres', 'active', '2024-05-09 05:35:52.633+00', '2024-05-09 05:35:52.633+00', NULL, 2, 2, NULL, 3, NULL),
	('Carlito', 'Meneses', 'active', '2024-05-09 05:36:51.612+00', '2024-05-09 05:36:51.612+00', NULL, 2, 2, NULL, 3, NULL),
	('Ferdinand', 'Domingo', 'active', '2024-05-09 05:38:09.701+00', '2024-05-09 05:38:09.701+00', NULL, 2, 2, NULL, 3, NULL),
	('Eduardo', 'Manipon', 'active', '2024-05-09 05:39:18.694+00', '2024-05-09 05:39:18.694+00', NULL, 2, 2, NULL, 3, NULL),
	('Arneleo', 'Banaga', 'active', '2024-05-09 05:40:41.628+00', '2024-05-09 05:40:41.628+00', NULL, 2, 2, NULL, 3, NULL),
	('Almer', 'Alviar', 'active', '2024-05-09 05:42:24.834+00', '2024-05-09 05:42:24.834+00', NULL, 2, 2, NULL, 3, NULL),
	('Michael', 'Macasieb', 'active', '2024-04-26 01:08:03.252+00', '2024-04-26 01:08:03.252+00', NULL, 2, 2, NULL, 2, 'ff6d56b9-620d-431d-92b6-547ef000ad57'),
	('Rochelle', 'Evaristo', 'active', '2024-04-25 16:28:33.906+00', '2024-05-15 23:16:10.276+00', NULL, 1, 2, NULL, 2, '8d29e084-c95e-47fc-839f-274572e4de8c'),
	('Roseler', 'Etrata', 'active', '2024-05-09 05:43:43.824+00', '2024-05-09 05:43:43.824+00', NULL, 2, 2, NULL, 3, NULL),
	('Randy', 'Mansat', 'active', '2024-05-09 05:44:37.657+00', '2024-05-09 05:44:37.657+00', NULL, 2, 2, NULL, 3, NULL),
	('Michael', 'Fernandez', 'active', '2024-05-09 06:12:57.3+00', '2024-05-09 06:12:57.3+00', NULL, 2, 2, NULL, 3, NULL),
	('Liwanag', 'Garcia', 'active', '2024-05-09 06:13:59.764+00', '2024-05-09 06:13:59.764+00', NULL, 2, 2, NULL, 3, NULL),
	('Walter', 'Ordonio', 'terminated', '2024-05-13 16:03:24.485+00', '2024-05-13 16:03:55.703+00', NULL, 2, 2, NULL, 3, NULL),
	('Joel', 'Corpuz', 'terminated', '2024-05-13 11:22:37.223+00', '2024-05-13 20:16:51.597+00', NULL, 2, 2, NULL, 3, NULL),
	('Renato', 'Bravo', 'terminated', '2024-05-13 19:42:27.387+00', '2024-05-13 20:18:22.491+00', NULL, 2, 2, NULL, 3, NULL),
	('Lyndon', 'Jacob', 'terminated', '2024-05-13 19:43:03.748+00', '2024-05-13 20:18:42.599+00', NULL, 2, 2, NULL, 3, NULL),
	('Sonny', 'Porquillano', 'terminated', '2024-05-13 19:43:38.511+00', '2024-05-13 20:18:51.89+00', NULL, 2, 2, NULL, 3, NULL),
	('Limuel', 'Valdez', 'terminated', '2024-05-13 19:45:02.482+00', '2024-05-13 20:19:00.387+00', NULL, 2, 2, NULL, 3, NULL),
	('Bernard', 'Manaois', 'terminated', '2024-05-13 19:46:05.819+00', '2024-05-13 20:19:09.826+00', NULL, 2, 2, NULL, 3, NULL),
	('Jason', 'Ellorin', 'terminated', '2024-05-13 19:48:08.654+00', '2024-05-13 20:19:17.99+00', NULL, 2, 2, NULL, 3, NULL),
	('Jemeric', 'Garlijo', 'terminated', '2024-05-13 19:49:45.316+00', '2024-05-13 20:19:51.523+00', NULL, 2, 2, NULL, 3, NULL),
	('Randy', 'Buduan', 'terminated', '2024-05-13 19:52:08.3+00', '2024-05-13 20:20:02.958+00', NULL, 2, 2, NULL, 3, NULL),
	('Joey', 'Evangelista', 'terminated', '2024-05-13 20:13:01.953+00', '2024-05-13 20:20:10.853+00', NULL, 2, 2, NULL, 3, NULL),
	('William', 'Anselmo', 'terminated', '2024-05-13 20:13:32.021+00', '2024-05-13 20:20:22.649+00', NULL, 2, 2, NULL, 3, NULL),
	('Virgilio', 'Ticman', 'terminated', '2024-05-13 20:16:29.966+00', '2024-05-13 20:20:30.473+00', NULL, 2, 2, NULL, 3, NULL),
	('Regine', 'Soriano', 'terminated', '2024-05-13 20:25:13.775+00', '2024-05-13 20:26:27.444+00', NULL, 2, 2, NULL, 3, NULL),
	('Joe Franz', 'Garcia', 'terminated', '2024-05-13 20:26:16.182+00', '2024-05-13 20:26:37.783+00', NULL, 2, 2, NULL, 3, NULL),
	('R', 'Figuracion', 'terminated', '2024-05-14 13:09:41.153+00', '2024-05-14 13:29:24.608+00', NULL, 2, 2, NULL, 3, NULL),
	('P', 'Laguna', 'terminated', '2024-05-14 13:12:47.997+00', '2024-05-14 13:29:51.896+00', NULL, 2, 2, NULL, 3, NULL),
	('D', 'Contaoe', 'terminated', '2024-05-14 13:25:26.262+00', '2024-05-14 13:30:00.194+00', NULL, 2, 2, NULL, 3, NULL),
	('Charlie', 'Costales', 'active', '2024-04-26 01:11:21.781+00', '2024-04-26 01:11:21.781+00', NULL, 2, 2, NULL, 2, 'c44c7cc7-8d39-4269-883b-5d85ffb5d657');

--
-- Data for Name: vehicle_types; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."vehicle_types" ("id", "type", "created_at", "updated_at", "deleted_at", "created_by", "updated_by", "deleted_by") VALUES
	(1, 'Car', '2024-04-25 16:42:28.166791', '2024-04-25 16:42:28.166791', NULL, 2, 2, NULL),
	(2, 'Tricycle', '2024-04-26 02:55:06.063394', '2024-04-26 02:55:06.063394', NULL, 2, 2, NULL),
	(3, 'Truck', '2024-04-26 02:55:16.805553', '2024-04-26 02:55:16.805553', NULL, 2, 2, NULL),
	(4, 'Motorcycle', '2024-04-26 02:55:31.3344', '2024-04-26 02:55:15.958', NULL, 2, 2, NULL),
	(6, 'Multicab', '2024-05-09 10:22:05.344765', '2024-05-09 10:22:05.344765', NULL, 2, 2, NULL),
	(7, 'Bus', '2024-05-09 10:22:50.811924', '2024-05-09 10:22:50.811924', NULL, 2, 2, NULL),
	(8, 'Elf', '2024-05-09 10:22:57.050128', '2024-05-09 10:22:57.050128', NULL, 2, 2, NULL),
	(9, 'Pick-up', '2024-05-09 10:23:06.294841', '2024-05-09 10:23:06.294841', NULL, 2, 2, NULL),
	(10, 'Van', '2024-05-09 10:23:15.449313', '2024-05-09 10:23:15.449313', NULL, 2, 2, NULL),
	(11, 'Canter', '2024-05-09 10:23:30.635578', '2024-05-09 10:23:30.635578', NULL, 2, 2, NULL),
	(12, 'Owner Jeep', '2024-05-09 10:23:40.794954', '2024-05-09 10:23:40.794954', NULL, 2, 2, NULL),
	(13, 'Jeep', '2024-05-09 10:23:52.347522', '2024-05-09 10:23:52.347522', NULL, 2, 2, NULL),
	(14, 'L300', '2024-05-09 10:24:13.40574', '2024-05-09 10:24:13.40574', NULL, 2, 2, NULL),
	(15, 'Pajero', '2024-05-09 10:24:30.017971', '2024-05-09 10:24:30.017971', NULL, 2, 2, NULL),
	(16, 'Forward', '2024-05-09 10:25:28.684809', '2024-05-09 10:25:28.684809', NULL, 2, 2, NULL),
	(17, 'Modern Jeep', '2024-05-13 09:25:56.092226', '2024-05-13 09:25:56.092226', NULL, 2, 2, NULL),
	(5, 'Kulong-Kulong', '2024-05-09 10:21:55.169345', '2024-05-13 09:26:11.09', NULL, 2, 2, NULL);


--
-- Data for Name: violations; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO "public"."violations" ("id", "name", "created_at", "updated_at", "deleted_at", "created_by", "updated_by", "deleted_by") VALUES
	(4, 'Driving under the influence of liquor', '2024-04-26 02:24:15.075112', '2024-04-26 02:24:15.075112', NULL, 2, 2, NULL),
	(5, 'No Plate / No Travel', '2024-04-26 02:25:01.054361', '2024-04-26 02:25:01.054361', NULL, 2, 2, NULL),
	(6, 'Reckless Driving', '2024-04-26 02:25:37.190794', '2024-04-26 02:25:37.190794', NULL, 2, 2, NULL),
	(7, 'Not Wearing Seatbelt', '2024-04-26 02:26:20.536693', '2024-04-26 02:26:20.536693', NULL, 2, 2, NULL),
	(8, 'Truck Ban 6:00am to & 6:00pm', '2024-04-26 02:26:45.627377', '2024-04-26 02:26:29.269', NULL, 2, 2, NULL),
	(9, 'Driving without license', '2024-04-26 02:27:30.892612', '2024-04-26 02:27:05', NULL, 2, 2, NULL),
	(10, 'City Ordinance #34 Tricycle (Coding)', '2024-04-26 02:28:19.201666', '2024-04-26 02:28:19.201666', NULL, 2, 2, NULL),
	(11, 'LOI 1428 (Tricycle Ban along National Road) 4136 SEC 37', '2024-04-26 02:28:58.883532', '2024-04-26 02:28:58.883532', NULL, 2, 2, NULL),
	(12, 'Student Permit', '2024-04-26 02:29:33.578085', '2024-04-26 02:29:33.578085', NULL, 2, 2, NULL),
	(13, 'No Mayor''s Permit', '2024-04-26 02:30:10.265348', '2024-04-26 02:30:10.265348', NULL, 2, 2, NULL),
	(14, 'Overpricing', '2024-04-26 02:31:06.766276', '2024-04-26 02:31:06.766276', NULL, 2, 2, NULL),
	(15, 'Muffler', '2024-04-26 02:31:32.30405', '2024-04-26 02:31:32.30405', NULL, 2, 2, NULL),
	(16, 'Colorum', '2024-04-26 02:31:56.920215', '2024-04-26 02:31:56.920215', NULL, 2, 2, NULL),
	(17, 'Unregistered Vehicle', '2024-04-26 02:32:23.289633', '2024-04-26 02:32:23.289633', NULL, 2, 2, NULL),
	(18, 'Overloading / Top Loading', '2024-04-26 02:32:54.946319', '2024-04-26 02:32:54.946319', NULL, 2, 2, NULL),
	(19, 'Refuse to Sign', '2024-04-26 02:33:34.28026', '2024-04-26 02:33:34.28026', NULL, 2, 2, NULL),
	(20, 'Disregarding Traffic Order', '2024-04-26 02:34:22.585078', '2024-04-26 02:34:22.585078', NULL, 2, 2, NULL),
	(21, 'No Loading / Unloading', '2024-04-26 02:34:43.171178', '2024-04-26 02:34:43.171178', NULL, 2, 2, NULL),
	(22, 'Driving in Slippers / Sleeveless', '2024-04-26 02:35:10.347825', '2024-04-26 02:35:10.347825', NULL, 2, 2, NULL),
	(23, 'Unattended / Illegally Parked Vehicle', '2024-04-26 02:35:31.301591', '2024-04-26 02:35:31.301591', NULL, 2, 2, NULL),
	(24, 'Traffic Obstruction', '2024-04-26 02:35:50.522389', '2024-04-26 02:35:50.522389', NULL, 2, 2, NULL),
	(25, 'No U-Turn', '2024-04-26 02:36:19.086984', '2024-04-26 02:36:19.086984', NULL, 2, 2, NULL),
	(27, 'OR / CR not carried', '2024-04-26 02:37:04.706963', '2024-04-26 02:37:04.706963', NULL, 2, 2, NULL),
	(28, 'Arrogant / Discourteous', '2024-04-26 02:41:50.186524', '2024-04-26 02:41:50.186524', NULL, 2, 2, NULL),
	(29, 'One Way Traffic Violations / Counter Flow', '2024-04-26 02:42:12.462431', '2024-04-26 02:42:12.462431', NULL, 2, 2, NULL),
	(30, 'No Helmet', '2024-04-26 02:42:46.770181', '2024-04-26 02:42:46.770181', NULL, 2, 2, NULL),
	(32, 'Failure to Obey Traffic Enforcer', '2024-05-13 08:52:06.188349', '2024-05-13 08:52:06.188349', NULL, 2, 2, NULL),
	(26, 'Disregarding Traffic Sign / Light ', '2024-04-26 02:36:43.189984', '2024-05-13 08:53:07.644', NULL, 2, 2, NULL),
	(33, 'Expired License', '2024-05-13 09:32:00.375375', '2024-05-13 09:32:00.375375', NULL, 2, 2, NULL),
	(34, 'No Left Turn', '2024-05-13 09:32:18.924222', '2024-05-13 09:32:18.924222', NULL, 2, 2, NULL),
	(35, 'Swerving', '2024-05-13 09:32:37.263223', '2024-05-13 09:32:37.263223', NULL, 2, 2, NULL),
	(36, 'No Helmet (Backride)', '2024-05-13 09:33:19.097351', '2024-05-13 09:33:19.097351', NULL, 2, 2, NULL),
	(37, 'No Side Mirror', '2024-05-13 09:33:35.899636', '2024-05-13 09:33:35.899636', NULL, 2, 2, NULL),
	(2, 'No Driver''s License', '2024-04-25 16:31:54.190162', '2024-05-15 22:30:11.434', NULL, 2, 2, NULL);


--
-- Data for Name: buckets; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: objects; Type: TABLE DATA; Schema: storage; Owner: supabase_storage_admin
--



--
-- Data for Name: hooks; Type: TABLE DATA; Schema: supabase_functions; Owner: supabase_functions_admin
--



--
-- Data for Name: secrets; Type: TABLE DATA; Schema: vault; Owner: supabase_admin
--



--
-- Name: refresh_tokens_id_seq; Type: SEQUENCE SET; Schema: auth; Owner: supabase_auth_admin
--

SELECT pg_catalog.setval('"auth"."refresh_tokens_id_seq"', 207, true);


--
-- Name: key_key_id_seq; Type: SEQUENCE SET; Schema: pgsodium; Owner: supabase_admin
--

SELECT pg_catalog.setval('"pgsodium"."key_key_id_seq"', 1, false);


--
-- Name: employees_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."employees_id_seq"', 118, true);


--
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."roles_id_seq"', 5, true);


--
-- Name: tickets_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."tickets_id_seq"', 2078, true);


--
-- Name: vehicle_types_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."vehicle_types_id_seq"', 17, true);


--
-- Name: violations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('"public"."violations_id_seq"', 38, true);


--
-- Name: hooks_id_seq; Type: SEQUENCE SET; Schema: supabase_functions; Owner: supabase_functions_admin
--

SELECT pg_catalog.setval('"supabase_functions"."hooks_id_seq"', 1, false);


--
-- PostgreSQL database dump complete
--

RESET ALL;
