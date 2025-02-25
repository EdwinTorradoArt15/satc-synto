import { LightboxGallery1,  LightboxGalleryDescription } from "./basicgallery";
import PageHeader from "../../../components/dashboard/PageHeader";


const Gallery = () => {
	return (
		<div>
			<PageHeader currentpage="Gallery" activepage="Advanced Ui" mainpage="Gallery" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Basic Gallery</h5>
						</div>
						<div className="box-body">
							<div className="sm:grid grid-cols-12 gap-6 sm:space-y-0 space-y-6">
								<LightboxGallery1 />
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box">
						<div className="box-header">
							<h5 className="box-title">Image With Description</h5>
						</div>
						<div className="box-body">
							<div className="sm:grid grid-cols-12 gap-6 sm:space-y-0 space-y-6">

								<LightboxGalleryDescription />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Gallery;
