import { defineMessages } from 'react-intl';

const defaultLocale = 'vi';

const defaultMessages = defineMessages({"activerecordErrorsModelsFeedbackAttributesEmailBlank":{"id":"activerecord.errors.models.feedback.attributes.email.blank","defaultMessage":"không được để trống"},"activerecordErrorsModelsFeedbackAttributesEmailInvalid":{"id":"activerecord.errors.models.feedback.attributes.email.invalid","defaultMessage":"không đúng định dạng"},"activerecordErrorsModelsFeedbackAttributesEmailTooLong":{"id":"activerecord.errors.models.feedback.attributes.email.too_long","defaultMessage":"quá dài (tối đa 127 ký tự)"},"activerecordErrorsModelsFeedbackAttributesPhoneInvalid":{"id":"activerecord.errors.models.feedback.attributes.phone.invalid","defaultMessage":"không đúng định dạng"},"activerecordErrorsModelsFeedbackAttributesPhoneTooLong":{"id":"activerecord.errors.models.feedback.attributes.phone.too_long","defaultMessage":"quá dài (tối đa 15 ký tự)"},"activerecordErrorsModelsFeedbackAttributesNameBlank":{"id":"activerecord.errors.models.feedback.attributes.name.blank","defaultMessage":"không được để trống"},"activerecordErrorsModelsFeedbackAttributesNameTooLong":{"id":"activerecord.errors.models.feedback.attributes.name.too_long","defaultMessage":"quá dài (tối đa 127 ký tự)"},"activerecordErrorsModelsFeedbackAttributesSubjectBlank":{"id":"activerecord.errors.models.feedback.attributes.subject.blank","defaultMessage":"không được để trống"},"activerecordErrorsModelsFeedbackAttributesSubjectTooLong":{"id":"activerecord.errors.models.feedback.attributes.subject.too_long","defaultMessage":"quá dài (tối đa 255 ký tự)"},"activerecordErrorsModelsFeedbackAttributesContentBlank":{"id":"activerecord.errors.models.feedback.attributes.content.blank","defaultMessage":"không được để trống"},"activerecordErrorsModelsFeedbackAttributesContentTooLong":{"id":"activerecord.errors.models.feedback.attributes.content.too_long","defaultMessage":"quá dài (tối đa 1023 ký tự)"},"activerecordErrorsModelsRegistrationAttributesEmailBlank":{"id":"activerecord.errors.models.registration.attributes.email.blank","defaultMessage":"không được để trống"},"activerecordErrorsModelsRegistrationAttributesEmailInvalid":{"id":"activerecord.errors.models.registration.attributes.email.invalid","defaultMessage":"không đúng định dạng"},"activerecordErrorsModelsRegistrationAttributesEmailTooLong":{"id":"activerecord.errors.models.registration.attributes.email.too_long","defaultMessage":"quá dài (tối đa 127 ký tự)"},"activerecordErrorsModelsRegistrationAttributesPhoneBlank":{"id":"activerecord.errors.models.registration.attributes.phone.blank","defaultMessage":"không được để trống"},"activerecordErrorsModelsRegistrationAttributesPhoneInvalid":{"id":"activerecord.errors.models.registration.attributes.phone.invalid","defaultMessage":"không đúng định dạng"},"activerecordErrorsModelsRegistrationAttributesPhoneTooLong":{"id":"activerecord.errors.models.registration.attributes.phone.too_long","defaultMessage":"quá dài (tối đa 15 ký tự)"},"activerecordErrorsModelsRegistrationAttributesNameBlank":{"id":"activerecord.errors.models.registration.attributes.name.blank","defaultMessage":"không được để trống"},"activerecordErrorsModelsRegistrationAttributesNameTooLong":{"id":"activerecord.errors.models.registration.attributes.name.too_long","defaultMessage":"quá dài (tối đa 127 ký tự)"},"activerecordErrorsModelsRegistrationAttributesCourseIdBlank":{"id":"activerecord.errors.models.registration.attributes.course_id.blank","defaultMessage":"không được để trống"},"activerecordErrorsModelsRegistrationAttributesAddressBlank":{"id":"activerecord.errors.models.registration.attributes.address.blank","defaultMessage":"không được để trống"},"activerecordErrorsModelsRegistrationAttributesAddressTooLong":{"id":"activerecord.errors.models.registration.attributes.address.too_long","defaultMessage":"quá dài (tối đa 1023 ký tự)"},"adminLayoutsApplicationTitle":{"id":"admin.layouts.application.title","defaultMessage":"Management"},"adminNavbarHeaderBrand":{"id":"admin.navbar_header.brand","defaultMessage":"FAA Admin"},"adminNavbarRightUser":{"id":"admin.navbar_right.user","defaultMessage":"Tran Xuan Nam"},"adminNavbarRightProfile":{"id":"admin.navbar_right.profile","defaultMessage":"Profile"},"adminNavbarRightSettings":{"id":"admin.navbar_right.settings","defaultMessage":"Settings"},"adminNavbarRightInbox":{"id":"admin.navbar_right.inbox","defaultMessage":"Inbox"},"adminNavbarRightLogout":{"id":"admin.navbar_right.logout","defaultMessage":"Logout"},"adminSidebarDashboard":{"id":"admin.sidebar.dashboard","defaultMessage":"Dashboard"},"adminSidebarNewsCategories":{"id":"admin.sidebar.news_categories","defaultMessage":"Danh mục tin tức"},"adminSidebarFeedbacks":{"id":"admin.sidebar.feedbacks","defaultMessage":"Phản hồi"},"adminSidebarCourseCategories":{"id":"admin.sidebar.course_categories","defaultMessage":"Chủ đề khóa học"},"adminSidebarCharts":{"id":"admin.sidebar.charts","defaultMessage":"Charts"},"adminSidebarTables":{"id":"admin.sidebar.tables","defaultMessage":"Tables"},"adminSidebarForms":{"id":"admin.sidebar.forms","defaultMessage":"Forms"},"adminSidebarDropdown":{"id":"admin.sidebar.dropdown","defaultMessage":"Dropdown"},"adminSidebarDropdownItem":{"id":"admin.sidebar.dropdown_item","defaultMessage":"Dropdown Item"},"adminSidebarBlankPage":{"id":"admin.sidebar.blank_page","defaultMessage":"Blank Page"},"adminSidebarCourses":{"id":"admin.sidebar.courses","defaultMessage":"Courses"},"adminPageHeaderDashboard":{"id":"admin.page_header.dashboard","defaultMessage":"Dashboard"},"adminCertificationsAddSuccess":{"id":"admin.certifications.add_success","defaultMessage":"Thêm mới thành công"},"adminCertificationsDeleteSuccess":{"id":"admin.certifications.delete_success","defaultMessage":"Xóa thành công"},"adminCertificationsCertifications":{"id":"admin.certifications.certifications","defaultMessage":"Chứng chỉ"},"adminCertificationsNew":{"id":"admin.certifications.new","defaultMessage":"Thêm chứng chỉ"},"adminCertificationsName":{"id":"admin.certifications.name","defaultMessage":"Tên"},"adminCertificationsDescription":{"id":"admin.certifications.description","defaultMessage":"Mô tả"},"adminCertificationsEdit":{"id":"admin.certifications.edit","defaultMessage":"Chỉnh sửa"},"adminCertificationsDelete":{"id":"admin.certifications.delete","defaultMessage":"Xóa"},"adminCertificationsSave":{"id":"admin.certifications.save","defaultMessage":"Lưu"},"adminUsersAddSuccess":{"id":"admin.users.add_success","defaultMessage":"Thêm mới thành công"},"adminUsersDeleteSuccess":{"id":"admin.users.delete_success","defaultMessage":"Xóa thành công"},"adminUsersUsers":{"id":"admin.users.users","defaultMessage":"Người Dùng "},"adminUsersNew":{"id":"admin.users.new","defaultMessage":"Thêm Người Dùng "},"adminUsersName":{"id":"admin.users.name","defaultMessage":"Tên"},"adminUsersRole":{"id":"admin.users.role","defaultMessage":"Role"},"adminUsersEdit":{"id":"admin.users.edit","defaultMessage":"Chỉnh sửa"},"adminUsersDelete":{"id":"admin.users.delete","defaultMessage":"Xóa"},"adminUsersSave":{"id":"admin.users.save","defaultMessage":"Lưu"},"adminUsersQuote":{"id":"admin.users.quote","defaultMessage":"quote"},"adminUsersEmail":{"id":"admin.users.email","defaultMessage":"email"},"adminUsersPhone":{"id":"admin.users.phone","defaultMessage":"phone"},"adminUsersOffice":{"id":"admin.users.office","defaultMessage":"office"},"adminUsersCertifications":{"id":"admin.users.certifications","defaultMessage":"Chứng chỉ"},"adminErrors":{"id":"admin.errors","defaultMessage":"Lỗi"},"adminCoursesCourse":{"id":"admin.courses.course","defaultMessage":"Khóa học"},"adminCoursesName":{"id":"admin.courses.name","defaultMessage":"Tên"},"adminCoursesDescription":{"id":"admin.courses.description","defaultMessage":"Mô tả"},"adminCoursesEdit":{"id":"admin.courses.edit","defaultMessage":"Chỉnh sửa"},"adminCoursesDelete":{"id":"admin.courses.delete","defaultMessage":"Xóa"},"adminCoursesAdd":{"id":"admin.courses.add","defaultMessage":"Thêm khoá học"},"adminCoursesStartDate":{"id":"admin.courses.start_date","defaultMessage":"Ngày bắt đầu"},"adminCoursesEndDate":{"id":"admin.courses.end_date","defaultMessage":"Ngày kết thúc"},"adminCoursesDeadline":{"id":"admin.courses.deadline","defaultMessage":"Hết hạn đăng kí"},"adminCoursesCost":{"id":"admin.courses.cost","defaultMessage":"Giá"},"adminCoursesStatus":{"id":"admin.courses.status","defaultMessage":"Trạng thái"},"adminCoursesCategory":{"id":"admin.courses.category","defaultMessage":"Loại"},"adminCoursesPlace":{"id":"admin.courses.place","defaultMessage":"Địa điểm"},"adminCoursesContent":{"id":"admin.courses.content","defaultMessage":"Nội dung"},"adminCoursesAddImage":{"id":"admin.courses.add_image","defaultMessage":"Thêm ảnh"},"adminCoursesDeleteSuccess":{"id":"admin.courses.delete_success","defaultMessage":"Xóa thành công"},"adminNewsCategoriesCategory":{"id":"admin.news_categories.category","defaultMessage":"Danh mục tin tức"},"adminNewsCategoriesNew":{"id":"admin.news_categories.new","defaultMessage":"Thêm danh mục"},"adminNewsCategoriesName":{"id":"admin.news_categories.name","defaultMessage":"Tên"},"adminNewsCategoriesDescription":{"id":"admin.news_categories.description","defaultMessage":"Mô tả"},"adminNewsCategoriesEdit":{"id":"admin.news_categories.edit","defaultMessage":"Chỉnh sửa"},"adminNewsCategoriesDelete":{"id":"admin.news_categories.delete","defaultMessage":"Xóa"},"adminFeedbacksTitle":{"id":"admin.feedbacks.title","defaultMessage":"Danh sách phản hồi"},"adminFeedbacksName":{"id":"admin.feedbacks.name","defaultMessage":"Tên"},"adminFeedbacksEmail":{"id":"admin.feedbacks.email","defaultMessage":"Email"},"adminFeedbacksPhone":{"id":"admin.feedbacks.phone","defaultMessage":"SĐT"},"adminFeedbacksSubject":{"id":"admin.feedbacks.subject","defaultMessage":"Chủ đề"},"adminFeedbacksContent":{"id":"admin.feedbacks.content","defaultMessage":"Nội dung"},"adminFeedbacksDelete":{"id":"admin.feedbacks.delete","defaultMessage":"Xóa"},"adminFeedbacksDeleteSuccess":{"id":"admin.feedbacks.delete_success","defaultMessage":"Đã xóa phản hồi"},"adminFeedbacksNotFound":{"id":"admin.feedbacks.not_found","defaultMessage":"Không tìm thấy phản hồi"},"adminFeedbacksDeleteFailed":{"id":"admin.feedbacks.delete_failed","defaultMessage":"Không thể xóa phản hồi"},"adminCourseCategoriesCategory":{"id":"admin.course_categories.category","defaultMessage":"Chủ đề khóa học"},"adminCourseCategoriesNew":{"id":"admin.course_categories.new","defaultMessage":"Thêm chủ đề"},"adminCourseCategoriesName":{"id":"admin.course_categories.name","defaultMessage":"Tên chủ đề"},"adminCourseCategoriesDescription":{"id":"admin.course_categories.description","defaultMessage":"Mô tả"},"adminCourseCategoriesEdit":{"id":"admin.course_categories.edit","defaultMessage":"Chỉnh sửa"},"adminCourseCategoriesDelete":{"id":"admin.course_categories.delete","defaultMessage":"Xóa"},"adminCourseCategoriesSave":{"id":"admin.course_categories.save","defaultMessage":"Lưu lại"},"adminCourseCategoriesSaveSuccess":{"id":"admin.course_categories.save_success","defaultMessage":"Cập nhật thành công"},"adminCourseCategoriesSaveFailed":{"id":"admin.course_categories.save_failed","defaultMessage":"Cập nhật thất bại"},"adminCourseCategoriesAddSuccess":{"id":"admin.course_categories.add_success","defaultMessage":"Thêm chủ đề thành công"},"adminCourseCategoriesAddFailed":{"id":"admin.course_categories.add_failed","defaultMessage":"Thêm chủ đề thất bại"},"adminCourseCategoriesDeleteSuccess":{"id":"admin.course_categories.delete_success","defaultMessage":"Xóa chủ đề thành công"},"adminCourseCategoriesDeleteFailed":{"id":"admin.course_categories.delete_failed","defaultMessage":"Xóa chủ đề thất bại"},"adminCourseCategoriesNotFound":{"id":"admin.course_categories.not_found","defaultMessage":"Không tìm thấy chủ đề này"},"viewsPaginationFirst":{"id":"views.pagination.first","defaultMessage":"\u0026laquo; Trang đầu"},"viewsPaginationLast":{"id":"views.pagination.last","defaultMessage":"Trang cuối \u0026raquo;"},"viewsPaginationPrevious":{"id":"views.pagination.previous","defaultMessage":"\u0026lsaquo; Trang trước"},"viewsPaginationNext":{"id":"views.pagination.next","defaultMessage":"Trang sau \u0026rsaquo;"},"viewsPaginationTruncate":{"id":"views.pagination.truncate","defaultMessage":"..."},"helpersPageEntriesInfoOnePageDisplayEntriesZero":{"id":"helpers.page_entries_info.one_page.display_entries.zero","defaultMessage":"Không tìm thấy %{entry_name}"},"helpersPageEntriesInfoOnePageDisplayEntriesOne":{"id":"helpers.page_entries_info.one_page.display_entries.one","defaultMessage":"Đang hiển thị \u003cb\u003e1\u003c/b\u003e %{entry_name}"},"helpersPageEntriesInfoOnePageDisplayEntriesOther":{"id":"helpers.page_entries_info.one_page.display_entries.other","defaultMessage":"Đang hiển thị \u003cb\u003etất cả %{count}\u003c/b\u003e %{entry_name}"},"helpersPageEntriesInfoMorePagesDisplayEntries":{"id":"helpers.page_entries_info.more_pages.display_entries","defaultMessage":"Đang hiển thị %{entry_name} \u003cb\u003e%{first}\u0026nbsp;-\u0026nbsp;%{last}\u003c/b\u003e của \u003cb\u003e%{total}\u003c/b\u003e trong tất cả"},"simpleFormYes":{"id":"simple_form.yes","defaultMessage":"Có"},"simpleFormNo":{"id":"simple_form.no","defaultMessage":"Không"},"simpleFormRequiredText":{"id":"simple_form.required.text","defaultMessage":"Bắt buộc"},"simpleFormRequiredMark":{"id":"simple_form.required.mark","defaultMessage":"*"},"simpleFormErrorNotificationDefaultMessage":{"id":"simple_form.error_notification.default_message","defaultMessage":"Vui lòng kiểm tra lại các vấn đề sau đây:"},"v1NewsCategoriesCreateAddSuccess":{"id":"v1.news_categories.create.add_success","defaultMessage":"Thêm mới thành công"},"v1NewsCategoriesCreateAddFailed":{"id":"v1.news_categories.create.add_failed","defaultMessage":"Thêm mới không thành công"},"v1NewsCategoriesUpdateSaveSuccess":{"id":"v1.news_categories.update.save_success","defaultMessage":"Chỉnh sửa thành công"},"v1NewsCategoriesUpdateSaveFailed":{"id":"v1.news_categories.update.save_failed","defaultMessage":"Chỉnh sửa không thành công"},"v1NewsCategoriesDestroyDeleteSuccess":{"id":"v1.news_categories.destroy.delete_success","defaultMessage":"Xóa thành công"},"v1NewsCategoriesDestroyDeleteFailed":{"id":"v1.news_categories.destroy.delete_failed","defaultMessage":"Xóa không thành công"},"layoutsApplicationTitle":{"id":"layouts.application.title","defaultMessage":"Framgia Awesome Academy"},"layoutsApplicationLoading":{"id":"layouts.application.loading","defaultMessage":"Đang tải"},"layoutsHeaderLogoAlt":{"id":"layouts.header.logo_alt","defaultMessage":"Logo Framgia Awesome Academy"},"layoutsHeaderHome":{"id":"layouts.header.home","defaultMessage":"Trang chủ"},"layoutsHeaderCourses":{"id":"layouts.header.courses","defaultMessage":"Lịch khai giảng"},"layoutsHeaderNews":{"id":"layouts.header.news","defaultMessage":"Tin tức - Thông báo"},"layoutsHeaderContact":{"id":"layouts.header.contact","defaultMessage":"Liên hệ"},"layoutsHeaderMoreTool":{"id":"layouts.header.more_tool","defaultMessage":"Các công cụ khác"},"layoutsFooterOurCourses":{"id":"layouts.footer.our_courses","defaultMessage":"Các khóa học"},"layoutsFooterRuby":{"id":"layouts.footer.ruby","defaultMessage":"Ruby"},"layoutsFooterPhp":{"id":"layouts.footer.php","defaultMessage":"PHP"},"layoutsFooterJava":{"id":"layouts.footer.java","defaultMessage":"Java"},"layoutsFooterAndroid":{"id":"layouts.footer.android","defaultMessage":"Android"},"layoutsFooterIos":{"id":"layouts.footer.ios","defaultMessage":"IOS"},"layoutsFooterQuickLinks":{"id":"layouts.footer.quick_links","defaultMessage":"Liên kết nhanh"},"layoutsFooterHome":{"id":"layouts.footer.home","defaultMessage":"Trang chủ"},"layoutsFooterCourses":{"id":"layouts.footer.courses","defaultMessage":"Lịch khai giảng"},"layoutsFooterNews":{"id":"layouts.footer.news","defaultMessage":"Tin tức - Thông báo"},"layoutsFooterContact":{"id":"layouts.footer.contact","defaultMessage":"Liên hệ"},"layoutsFooterTrainers":{"id":"layouts.footer.trainers","defaultMessage":"Đội ngũ của chúng tôi"},"layoutsFooterContactUs":{"id":"layouts.footer.contact_us","defaultMessage":"Liên hệ với chúng tôi"},"layoutsFooterFramgiaAddress":{"id":"layouts.footer.framgia_address","defaultMessage":"13F Keangnam Hanoi Landmark 72 Tower, Plot E6, Pham Hung Road, Nam Tu Liem Dist."},"layoutsFooterFaa":{"id":"layouts.footer.faa","defaultMessage":"Framgia Awesome Academy"},"layoutsFooterCopyright":{"id":"layouts.footer.copyright","defaultMessage":"© 2017 Framgia Awesome Academy - All rights reserved."},"layoutsFooterCreatedBy":{"id":"layouts.footer.created_by","defaultMessage":"Created by: Framgia Education"},"homeIndexIndexTitle":{"id":"home.index.index_title","defaultMessage":"Trang chủ"},"homeSliderWelcome":{"id":"home.slider.welcome","defaultMessage":"Chào mừng đến với"},"homeSliderFaa":{"id":"home.slider.faa","defaultMessage":"Framgia Awesome Academy"},"homeWhoWeAreWhoWeAre":{"id":"home.who_we_are.who_we_are","defaultMessage":"Chúng tôi là ai?"},"homeWhoWeAreText":{"id":"home.who_we_are.text","defaultMessage":"Framgia Awesome Academy là một trung tâm đào tạo của công ty Framgia Việt Nam, được hình thành trên cơ sở kế thừa và nhân rộng mô hình đào tạo theo chuẩn Framgia. Awesome Academy mong muốn sẽ trở thành nôi đào tạo và chắp cánh cho sự phát triển toàn diện của các lập trình viên trong tương lai."},"homeWhoWeAreAgile":{"id":"home.who_we_are.agile","defaultMessage":"Chương trình đào tạo bài bản, được xây dựng theo mô hình Agile"},"homeWhoWeAreNetwork":{"id":"home.who_we_are.network","defaultMessage":"Được trực tiếp tham gia vào các dự án thực tế, hoạt động theo mô hình virtual company"},"homeWhoWeAreCertificate":{"id":"home.who_we_are.certificate","defaultMessage":"Hệ thống đào tạo theo chuẩn quốc tế được chứng nhận bởi IC Agile và Ruby Association sau khi hoàn thành khóa học"},"homeWhoWeAreTeaching":{"id":"home.who_we_are.teaching","defaultMessage":"Môi trường học tập năng động, trẻ trung với cơ sở vật chất hiện đại."},"homeWhoWeAreExpert":{"id":"home.who_we_are.expert","defaultMessage":"Đội ngũ giảng dạy là những chuyên gia có nhiều năm kinh nghiệm trong lĩnh vực công nghệ thông tin."},"homeWhoWeAreJob":{"id":"home.who_we_are.job","defaultMessage":"Cam kết hỗ trợ việc làm cho học viên sau khóa học."},"homeWhoWeAreSortSkill":{"id":"home.who_we_are.sort_skill","defaultMessage":"Học viên được đào tạo để phát triển kỹ năng mềm một cách toàn diện."},"homeWhoWeAreActivities":{"id":"home.who_we_are.activities","defaultMessage":"Tham gia các hoạt động ngoại khóa hấp dẫn và bổ ích."},"homeLastestCoursesLastestCourses":{"id":"home.lastest_courses.lastest_courses","defaultMessage":"Những khóa học mới nhất"},"homeLastestCoursesEnrolledCount":{"id":"home.lastest_courses.enrolled_count","defaultMessage":"Tổng số người đã đăng ký"},"homeTrainersTrainers":{"id":"home.trainers.trainers","defaultMessage":"Đội ngũ của chúng tôi"},"homeTrainersMore":{"id":"home.trainers.more","defaultMessage":"Xem tất cả"},"homeClientSayAboutUs":{"id":"home.client_say.about_us","defaultMessage":"Giới thiệu ngắn về chúng tôi"},"homeClientSayOurMission":{"id":"home.client_say.our_mission","defaultMessage":"Sứ mệnh"},"homeClientSayMissionText":{"id":"home.client_say.mission_text","defaultMessage":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"},"homeClientSayOurVision":{"id":"home.client_say.our_vision","defaultMessage":"Tầm nhìn"},"homeClientSayVisionText":{"id":"home.client_say.vision_text","defaultMessage":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"},"homeClientSayCoreValue":{"id":"home.client_say.core_value","defaultMessage":"Giá trị cốt lõi"},"homeClientSayCoreValueText":{"id":"home.client_say.core_value_text","defaultMessage":"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla"},"homeClientSayClientSaid":{"id":"home.client_say.client_said","defaultMessage":"Nhận xét từ khách hàng"},"homeClientSayClient1Name":{"id":"home.client_say.client1_name","defaultMessage":"TEAMLAB"},"homeClientSayClient1Said":{"id":"home.client_say.client1_said","defaultMessage":"Chúng tôi không thể hài lòng hơn với Framgia Awesome Academy. Một chương trình đào tạo giàu kiến thức nhưng rất thực tế. Một dịch vụ training chuyên nghiệp và đốc đáo."},"homeClientSayClient2Name":{"id":"home.client_say.client2_name","defaultMessage":"Đại học Bách khoa Hà Nội"},"homeClientSayClient2Said":{"id":"home.client_say.client2_said","defaultMessage":"Cám ơn Framgia Awesome Academy! Sinh viên của chúng tôi đã có những trải nghiệm tuyệt vời tại Framgia Awesome Academy. Giờ đây với những kỹ năng và kiến thức có được từ đó, các em cảm thấy vững vàng hơn rất nhiều khi bước vào môi trường làm việc thực tế trong ngành CNTT."},"homeClientSayClient3Name":{"id":"home.client_say.client3_name","defaultMessage":"Lê Đình Đoan"},"homeClientSayClient3Said":{"id":"home.client_say.client3_said","defaultMessage":"Khóa học thật sự rất tuyệt. Em nhận thấy các kiến thức và kỹ năng được học đều rất thiết thực và giúp em tiến bộ lên từng ngày. Giờ em đã là lập trình viên tại đúng công ty mà mình từng mơ ước. Em cảm thấy tự tin khi áp dụng những điều học được tại Framgia Awesome Academy để phát triển xa hơn với sự nghiệp của mình."},"homeClientSayClient4Name":{"id":"home.client_say.client4_name","defaultMessage":"Đại học Đông Á"},"homeClientSayClient4Said":{"id":"home.client_say.client4_said","defaultMessage":"Cám ơn Framgia Awesome Academy! Sinh viên của chúng tôi đã có những trải nghiệm tuyệt vời tại Framgia Awesome Academy. Giờ đây với những kỹ năng và kiến thức có được từ đó, các em cảm thấy vững vàng hơn rất nhiều khi bước vào môi trường làm việc thực tế trong ngành CNTT."},"homeOurClientsOurClients":{"id":"home.our_clients.our_clients","defaultMessage":"Đối tác của chúng tôi"},"sharedTopHeadingHome":{"id":"shared.top_heading.home","defaultMessage":"Trang chủ"},"sharedLoadingLoading":{"id":"shared.loading.loading","defaultMessage":"Đang tải"},"sharedPopularCoursePopularCourse":{"id":"shared.popular_course.popular_course","defaultMessage":"Khóa học phổ biến"},"sharedLatestNewsLatestNews":{"id":"shared.latest_news.latest_news","defaultMessage":"Tin tức mới"},"sharedTagsTagCloud":{"id":"shared.tags.tag_cloud","defaultMessage":"Tag clounds"},"numberCurrencyFormatUnit":{"id":"number.currency.format.unit","defaultMessage":"VND"},"coursesCourseReadmore":{"id":"courses.course.readmore","defaultMessage":"Xem thêm"},"coursesRightSidebarCourseCourseCategory":{"id":"courses.right_sidebar_course.course_category","defaultMessage":"Chuyên ngành"},"coursesCourseHeaderCategory":{"id":"courses.course_header.category","defaultMessage":"Chuyên ngành"},"coursesCourseHeaderTeacher":{"id":"courses.course_header.teacher","defaultMessage":"Giảng dạy"},"coursesCourseHeaderFramgiaVietnam":{"id":"courses.course_header.framgia_vietnam","defaultMessage":"Framgia Việt Nam"},"coursesCourseHeaderNumberOfMember":{"id":"courses.course_header.number_of_member","defaultMessage":"Số lương học viên"},"coursesCourseHeaderRegisterNow":{"id":"courses.course_header.register_now","defaultMessage":"Đăng ký ngay"},"coursesIndexAllCourse":{"id":"courses.index.all_course","defaultMessage":"Danh mục các khóa học"},"coursesIndexCourse":{"id":"courses.index.course","defaultMessage":"Khóa học"},"coursesIndexSearchCourse":{"id":"courses.index.search_course","defaultMessage":"Tìm kiếm khóa học"},"coursesShowDetailCourse":{"id":"courses.show.detail_course","defaultMessage":"Chi tiết khóa học"},"coursesShowCourse":{"id":"courses.show.course","defaultMessage":"Khóa học"},"feedbacksNewTitle":{"id":"feedbacks.new.title","defaultMessage":"Liên hệ"},"feedbacksHeadingTitleContact":{"id":"feedbacks.heading.title_contact","defaultMessage":"Liên hệ với chúng tôi"},"feedbacksHeadingTitleText1":{"id":"feedbacks.heading.title_text1","defaultMessage":"Nếu bạn quan tâm đến việc tìm hiểu thêm về cách chúng tôi có thể giúp bạn, vui lòng điền vào mẫu dưới đây."},"feedbacksHeadingTitleText2":{"id":"feedbacks.heading.title_text2","defaultMessage":"Bạn có thể gọi cho chúng tôi bất cứ lúc nào giữa 7h45 đến 16h45"},"feedbacksHeadingFramgiaAddress":{"id":"feedbacks.heading.framgia_address","defaultMessage":"13F Keangnam Hanoi Landmark 72 Tower, Plot E6, Pham Hung Road, Nam Tu Liem Dist."},"feedbacksFormName":{"id":"feedbacks.form.name","defaultMessage":"Tên"},"feedbacksFormEmail":{"id":"feedbacks.form.email","defaultMessage":"Thư điện tử"},"feedbacksFormPhone":{"id":"feedbacks.form.phone","defaultMessage":"Số điện thoại"},"feedbacksFormSubject":{"id":"feedbacks.form.subject","defaultMessage":"Chủ đề"},"feedbacksFormContent":{"id":"feedbacks.form.content","defaultMessage":"Nội dung"},"feedbacksFormSubmit":{"id":"feedbacks.form.submit","defaultMessage":"Gửi phản hồi"},"feedbacksCreateSuccess":{"id":"feedbacks.create.success","defaultMessage":"Cảm ơn bạn đã gửi phản hồi!"},"feedbacksCreateFail":{"id":"feedbacks.create.fail","defaultMessage":"Không gửi được phản hồi"},"trainersIndexTitle":{"id":"trainers.index.title","defaultMessage":"Giảng viên"},"trainersIndexTitleHeading":{"id":"trainers.index.title_heading","defaultMessage":"Đội ngủ giảng viên"},"trainersHeadingOurTrainer":{"id":"trainers.heading.our_trainer","defaultMessage":"Đội ngủ giảng viên của chúng tôi"},"trainersHeadingDescription":{"id":"trainers.heading.description","defaultMessage":"Đội ngũ giảng viên của chúng tôi là những chuyên gia có nhiều năm kinh nghiệm trong lĩnh vực công nghệ thông tin."},"trainersShowNotFound":{"id":"trainers.show.not_found","defaultMessage":"Không tìm thấy giảng viên này"},"trainersShowTitleHeading":{"id":"trainers.show.title_heading","defaultMessage":"Thông tin giảng viên"},"trainersShowTitle":{"id":"trainers.show.title","defaultMessage":"Giảng viên"},"trainersTrainerInfoAboutMe":{"id":"trainers.trainer_info.about_me","defaultMessage":"Giới thiệu về tôi"},"trainersTrainerInfoName":{"id":"trainers.trainer_info.name","defaultMessage":"Tên"},"trainersTrainerInfoEmail":{"id":"trainers.trainer_info.email","defaultMessage":"Thư điện tử"},"trainersTrainerInfoPhone":{"id":"trainers.trainer_info.phone","defaultMessage":"Số điện thoại"},"trainersTrainerInfoOffice":{"id":"trainers.trainer_info.office","defaultMessage":"Cơ quan"},"trainersTrainerInfoCertification":{"id":"trainers.trainer_info.certification","defaultMessage":"Chứng chỉ"},"trainersTrainerInfoQuote":{"id":"trainers.trainer_info.quote","defaultMessage":"Câu trích dẫn"},"registrationsFormHeading":{"id":"registrations.form.heading","defaultMessage":"Đăng ký khóa học"},"registrationsFormCourse":{"id":"registrations.form.course","defaultMessage":"Khóa học"},"registrationsFormName":{"id":"registrations.form.name","defaultMessage":"Tên"},"registrationsFormEmail":{"id":"registrations.form.email","defaultMessage":"Thư điện tử"},"registrationsFormPhone":{"id":"registrations.form.phone","defaultMessage":"Số điện thoại"},"registrationsFormAddress":{"id":"registrations.form.address","defaultMessage":"Địa chỉ"},"registrationsFormSubmit":{"id":"registrations.form.submit","defaultMessage":"Đăng ký"},"registrationsCreateSuccess":{"id":"registrations.create.success","defaultMessage":"Đăng ký khóa học thành công"},"registrationsCreateFail":{"id":"registrations.create.fail","defaultMessage":"Đăng ký khóa học thất bại"},"registrationsRegistrationSuccessThank":{"id":"registrations.registration_success.thank","defaultMessage":"Cảm ơn bạn đã đăng ký khóa học"},"registrationsRegistrationSuccessContact":{"id":"registrations.registration_success.contact","defaultMessage":"Chúng tôi sẽ liên hệ với bạn để xác nhận thông tin trong thời gian sớm nhất"},"registrationsRegistrationSuccessMoreCourse":{"id":"registrations.registration_success.more_course","defaultMessage":"Xem các khóa học khác"},"registrationsRegistrationSuccessThisCourse":{"id":"registrations.registration_success.this_course","defaultMessage":"Xem khóa học vừa đăng ký"},"newsNewsHeaderBy":{"id":"news.news_header.by","defaultMessage":"Đăng bởi: "},"newsNewsHeaderComments":{"id":"news.news_header.comments","defaultMessage":"Nhận xét: "},"newsNewsReadmore":{"id":"news.news.readmore","defaultMessage":"Xem thêm"},"newsRightSidebarNewsNewsCategory":{"id":"news.right_sidebar_news.news_category","defaultMessage":"Danh mục"},"newsIndexAllNews":{"id":"news.index.all_news","defaultMessage":"Tin tức - Thông báo \u003e"},"newsIndexNews":{"id":"news.index.news","defaultMessage":"Tin tức-Thông báo"},"newsShowAllNews":{"id":"news.show.all_news","defaultMessage":"Tin tức - Thông báo \u003e"},"newsShowNews":{"id":"news.show.news","defaultMessage":"Tin tức-Thông báo"},"timeFormatsDateMonthYearConcise":{"id":"time.formats.date_month_year_concise","defaultMessage":"%d-%m-%Y"}});

export { defaultMessages, defaultLocale };