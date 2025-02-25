import { useState } from "react";
import PageHeader from "../../../../components/dashboard/PageHeader";
import SunEditor from "suneditor-react";
import { Availability, Brand, Category, Color, Gender, ProductStatus, ProductVisibility, Size } from "../../../../common/select2data";
import Select from 'react-select';
import { FilePond, registerPlugin } from 'react-filepond';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import { TagsInput } from "react-tag-input-component";
import DatePicker from 'react-datepicker';
import { Link } from 'react-router-dom';

registerPlugin(FilePondPluginImagePreview, FilePondPluginImageExifOrientation);

const Editproduct = () => {

	const [files, setFiles] = useState<any>([]);  //React filepond

	const [selected, setSelected] = useState(['Water-resistance', 'Spacious', '5 pockets', 'Office Bag']);  // react-tag-input-component

	const [startDate, setStartDate] = useState<Date>(new Date()); //React Date picker

	return (
		<div>
			<PageHeader currentpage="Edit Product" activepage="Pages" mainpage="Edit Product" />
			<div className="grid grid-cols-12 gap-6">
				<div className="col-span-12">
					<div className="box !bg-transparent border-0 shadow-none">
						<div className="box-body p-0">
							<div className="grid grid-cols-12 gap-6">
								<div className="col-span-12 xl:col-span-6">
									<div className="box ">
										<div className="box-body">
											<div className="space-y-3">
												<div className="space-y-2">
													<label className="ti-form-label mb-0">Product Title</label>
													<input type="text" className="my-auto ti-form-input" placeholder="Dolar Leather Handbag For Women" defaultValue="HandBag For Womens" id="product-name" />
												</div>
												<div className="space-y-2">
													<label className="ti-form-label mb-0">Product Id</label>
													<input type="text" className="my-auto ti-form-input" placeholder="#2515445145" defaultValue="#2515445145" />
												</div>
												<div className="">
													<label className="ti-form-label">Product Description</label>
													<SunEditor height='200px' defaultValue="At vero eos et accusamus et iusto odio dignissimos
                                    ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                                    molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
                                    officia deserunt mollitia animi, id est laborum et dolorum fuga." />
												</div>
												<div className="space-y-2">
													<label className="ti-form-label">Product Features</label>
													<textarea className="ti-form-input" rows={2} defaultValue='But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.'></textarea>
													<label className="ti-form-label mt-1 text-sm font-normal opacity-70 text-gray-500 dark:text-white/70 mb-0">*Description should not exceed 500 letters</label>
												</div>
												<div className="grid grid-cols-12 gap-4">
													<div className="col-span-12 lg:col-span-6">
														<div className="space-y-2 product-1">
															<label className="ti-form-label mb-0">Product Status</label>
															<Select className="product-search" classnameprefix="react-select" options={ProductStatus} placeholder='Status' />
														</div>
													</div>
													<div className="col-span-12 lg:col-span-6">
														<div className="space-y-2  product-1">
															<label className="ti-form-label mb-0">Product Visibility</label>
															<Select className="product-search" classnameprefix="react-select" options={ProductVisibility} placeholder='Visibility' />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className="col-span-12 xl:col-span-6">
									<div className="box product-search">
										<div className="box-body space-y-3">
											<div className="grid grid-cols-12 gap-4">
												<div className="col-span-12 lg:col-span-4">
													<div className="space-y-2 product-1">
														<label className="ti-form-label mb-0">Product Category</label>
														<Select className="product-search" classnameprefix="react-select" options={Category} placeholder='Category' />
													</div>
												</div>
												<div className="col-span-12 lg:col-span-4">
													<div className="space-y-2  product-1">
														<label className="ti-form-label mb-0">Gender</label>
														<Select className="product-search" classnameprefix="react-select" options={Gender} placeholder='Gender' />
													</div>
												</div>
												<div className="col-span-12 lg:col-span-4">
													<div className="space-y-2  product-1">
														<label className="ti-form-label mb-0">Brand</label>
														<Select className="product-search" classnameprefix="react-select" options={Brand} placeholder='Brand' />
													</div>
												</div>
												<div className="col-span-12 lg:col-span-6">
													<div className="space-y-2  product-1 published-date">
														<label className="ti-form-label mb-0">Published Date and Time</label>
														<div className="flex rounded-sm shadow-sm">
															<div
																className="px-4 inline-flex items-center min-w-fit ltr:rounded-l-sm rtl:rounded-r-sm border ltr:border-r-0 rtl:border-l-0 border-gray-200 bg-gray-50 dark:bg-black/20 dark:border-white/10">
																<span className="text-sm text-gray-500 dark:text-white/70"><i
																	className="ri ri-calendar-line"></i></span>
															</div>
															<DatePicker className="ti-form-input rounded-l-none rtl:rounded-l-sm rtl:rounded-r-none focus:z-10" selected={startDate} onChange={(date: Date) => setStartDate(date)} locale="en-GB" showTimeSelect timeFormat="p" timeIntervals={15} dateFormat="Pp" />
														</div>
													</div>
												</div>
												<div className="col-span-12 lg:col-span-6">
													<div className="space-y-2  product-1">
														<label className="ti-form-label mb-0">Product Size</label>
														<Select className="product-search" classnameprefix="react-select" options={Size} placeholder='Size' />
													</div>
												</div>
												<div className="col-span-12 lg:col-span-4">
													<div className="space-y-2">
														<label className="ti-form-label mb-0">Actual Price </label>
														<input type="text" className="my-auto ti-form-input" placeholder="$550" defaultValue="$550" />
													</div>
												</div>
												<div className="col-span-12 lg:col-span-4">
													<div className="space-y-2">
														<label className="ti-form-label mb-0">Dealer Price </label>
														<input type="text" className="my-auto ti-form-input" placeholder="$400" defaultValue="$400" />
													</div>
												</div>
												<div className="col-span-12 lg:col-span-4">
													<div className="space-y-2">
														<label className="ti-form-label mb-0">Discount</label>
														<input type="text" className="my-auto ti-form-input" placeholder="10%" defaultValue="10%" />
													</div>
												</div>
												<div className="col-span-12 lg:col-span-6">
													<div className="space-y-2">
														<label className="ti-form-label">Available Colors</label>
														<Select className="product-search" classnameprefix="react-select" options={Color} placeholder='Availabilty' />
													</div>
												</div>
												<div className="col-span-12 lg:col-span-6">
													<div className="space-y-2  product-1">
														<label className="ti-form-label mb-0">Availabilty</label>
														<Select className="product-search" classnameprefix="react-select" options={Availability} placeholder='Availabilty' />
													</div>
												</div>
												<div className="col-span-12 lg:col-span-6">
													<div className="space-y-2  product-1">
														<label className="ti-form-label mb-0">Type</label>
														<input type="text" className="my-auto ti-form-input" placeholder="Hand Bag" defaultValue="Hand Bag" />
													</div>
												</div>
												<div className="col-span-12 lg:col-span-6">
													<div className="space-y-2  product-1">
														<label className="ti-form-label mb-0">Item Weight</label>
														<input type="text" className="my-auto ti-form-input" placeholder="250grams" defaultValue="250grams" />
													</div>
												</div>
											</div>
											<div className="space-y-2">
												<label className="flex justify-between ti-form-label">
													<span className="my-auto">Product Images</span></label>
												<FilePond className="basic-filepond" accepted-file-types={["application/pdf", "image/png", "image/jpeg", "image/gif"]}
													server="/api" allowReorder={true} files={files} onupdatefiles={setFiles} allowMultiple={false} allowImagePreview={true} maxFiles={10} name="filepond"
													labelIdle='Drag & Drop your files or <span className="filepond--label-action">Browse</span>' />
											</div>
											<div className="space-y-2">
												<label className="ti-form-label">Product Tags</label>
												<TagsInput value={selected} onChange={setSelected} name="ProductTag" placeHolder="Product Tags" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="box-footer text-end border-t-0 px-0">
							<Link to={`${import.meta.env.BASE_URL}pagecomponent/Ecommerce/product/`} className="ti-btn ti-btn-primary"><i className="ri-refresh-line"></i>update Product</Link>
							<Link to='#' className="ti-btn ti-btn-danger"><i className="ri-delete-bin-line"></i>Discard Product</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Editproduct;
