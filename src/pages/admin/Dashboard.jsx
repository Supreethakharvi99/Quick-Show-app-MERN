import { ChartLineIcon, CircleDollarSignIcon, PlayCircleIcon, UsersIcon } from 'lucide-react';
import { useEffect, useState } from 'react'
import { dummyDashboardData } from '../../assets/assets';
import Loading from '../../components/Loading';
import Title from '../../components/admin/Title';
import BlurCircle from '../../components/BlurCircle';

const Dashboard = () => {
    const currency = import.meta.env.VITE_CURRENCY

    const [dashboardDate, setDashboardData] = useState({
        totalBookings:0,
        totalRevenue:0,
        activeShows: [],
        totalUser: 0
    });
    const [loading, setLoading] = useState(true);

    const dashboardCard = [
  { title: "Total Bookings", value: dashboardDate.totalBookings || 0, icon: ChartLineIcon },
  { title: "Total Revenue", value: `${currency}${dashboardDate.totalRevenue || 0}`, icon: CircleDollarSignIcon },
  { title: "Active Shows", value: dashboardDate.activeShows.length || 0, icon: PlayCircleIcon },
  { title: "Total Users", value: dashboardDate.totalUser || 0, icon: UsersIcon }
];


    const fetchDashboardData = async() => {
        setDashboardData(dummyDashboardData)
        setLoading(false)
    }

    useEffect(() => {
        fetchDashboardData();
    },[])

  return !loading ? (
    <>
    <Title text1="Admin"  text2="Dashboard"/>
    <div className='relative flex flex-wrap gap-4 mt-6'>
        <BlurCircle top="-100px" left="0" />
        <div className='flex flex-wrap gap-4 w-full'>
            {dashboardCard.map((card, index) => (
                <div key={index} className='flex items-center justify-between px-4 py-3 bg-red-600/10 bprder border-red-600/20 rounded-md max-w-50 w-full'>
                    <div>
                        <h1 className='text-sm'>{card.title}</h1>
                        <p className='text-xl font-medium mt-1'>{card.value}</p>
                    </div>
                    <card.icon className='w-6 h-6' />
                </div>
            ))}
        </div>
    </div>
    </>
  ): <Loading />
}

export default Dashboard