import { AiFillStar } from "react-icons/ai";
import { SlBadge, SlEye, SlShare } from "react-icons/sl";
import PropTypes from "prop-types"
import { Link } from "react-router-dom";

const News = ({ news }) => {

	const { rating, total_view, title, name, published_date, img, thumbnail_url, image_url, details, _id } = news;

	return (
		<div className="relative flex w-auto flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mb-6">


			{/* author info */}
			<div className="relative bg-dark-6 px-5 flex w-full   rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
				<div className="flex items-center justify-between">
					<div className="relative mx-0 mt-4 flex w-full items-center gap-4 overflow-hidden rounded-xl bg-transparent bg-clip-border pt-0 pb-8 text-gray-700 shadow-none">
						<img
							src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
							alt="tania andrew"
							className="relative inline-block h-[58px] w-[58px] !rounded-full object-cover object-center"
						/>
						<div className="flex w-full flex-col gap-0.5">
							<div className="flex items-center justify-between ">
								<h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
									Tania Andrew
								</h5>

							</div>
							<p className="block font-sans text-base font-light leading-relaxed text-blue-gray-900 antialiased">
								Frontend Lead @ Google
							</p>
						</div>
					</div>

					<div className="5 flex justify-end text-2xl text-dark-3">
						<SlBadge></SlBadge>
						<SlShare></SlShare>
					</div>
				</div>

			</div>

			<div className="relative mx-4 mt-4 h-96 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
				<h2 className="text-dark-2 font-bold text-xl mb-5">Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military Aid Package Yet</h2>
				<img
					src={image_url}
					className="h-full w-full object-cover"
				/>
			</div>
			<div className="p-6">
				<div>
					{
						details.length > 200
							? <p>{details.slice(0, 200)} <Link to={`/news-details/${_id}`} className="text-rose">Reade More...</Link></p>
							:
							<p>{details}</p>
					}
				</div>
				<div className="mb-2 flex items-center justify-between">
					<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
						<div className="flex text-rose text-2xl">
							<AiFillStar></AiFillStar>
							<AiFillStar></AiFillStar>
							<AiFillStar></AiFillStar>
							<AiFillStar></AiFillStar>
							<AiFillStar></AiFillStar>

						</div>
					</p>
					<p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
						<span className="flex items-center gap-2"><SlEye /> {total_view}</span>
					</p>
				</div>
			</div>

		</div>
	);
};

export default News;

News.propTypes = {
	news: PropTypes.object.isRequired,
}