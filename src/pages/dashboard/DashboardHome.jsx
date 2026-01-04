// import { useEffect, useState } from "react";
// import axios from "axios";
// import {
//     BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
// } from "recharts";
// import { Car, CalendarCheck, Inbox } from "lucide-react";
// import { useAuth } from "../../hooks/useAuth";
// import LoadingSpinner from "../../components/LoadingSpinner";

// const DashboardHome = () => {
//     const { user } = useAuth();
//     const [data, setData] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         if (!user?.email) return;

//         setLoading(true);

//         axios
//             .get(
//                 `https://travelease-vehicle-booking.vercel.app/dashboard/overview?email=${user.email}`
//             )
//             .then((res) => {
//                 setData(res.data);
//             })
//             .catch((err) => {
//                 console.error("Dashboard API error:", err);
//                 setData(null);
//             })
//             .finally(() => setLoading(false));
//     }, [user]);

//     if (loading || !data) return <LoadingSpinner />;

//     const { stats, charts, recentBookings } = data;

//     const monthMap = [
//         "", "Jan", "Feb", "Mar", "Apr", "May", "Jun",
//         "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
//     ];

//     const chartData = charts.map((item) => ({
//         month: monthMap[item._id],
//         vehicles: item.count,
//     }));

//     return (
//         <div className="p-6 space-y-10">
//             {/* Overview Cards */}
//             <div className="grid md:grid-cols-3 gap-6">
//                 <StatCard title="Vehicles Added" value={stats.vehiclesCount} icon={<Car />} />
//                 <StatCard title="My Bookings" value={stats.myBookingsCount} icon={<CalendarCheck />} />
//                 <StatCard title="Bookings on My Vehicles" value={stats.receivedBookingsCount} icon={<Inbox />} />
//             </div>

//             {/* Chart */}
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
//                 <h3 className="text-xl font-semibold mb-4">
//                     Vehicles Added Per Month
//                 </h3>

//                 <ResponsiveContainer width="100%" height={300}>
//                     <BarChart data={chartData}>
//                         <XAxis dataKey="month" />
//                         <YAxis />
//                         <Tooltip />
//                         <Bar dataKey="vehicles" />
//                     </BarChart>
//                 </ResponsiveContainer>
//             </div>

//             {/* Recent Bookings */}
//             <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
//                 <h3 className="text-xl font-semibold mb-4">
//                     Recent Bookings
//                 </h3>

//                 <table className="w-full text-left">
//                     <thead className="border-b dark:border-gray-700">
//                         <tr>
//                             <th>Vehicle</th>
//                             <th>Email</th>
//                             <th>Price</th>
//                             <th>Date</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {recentBookings.map((b) => (
//                             <tr key={b._id} className="border-b dark:border-gray-700">
//                                 <td>{b.vehicleName}</td>
//                                 <td>{b.userEmail}</td>
//                                 <td>${b.pricePerDay}</td>
//                                 <td>{new Date(b.bookedAt).toLocaleDateString()}</td>
//                             </tr>
//                         ))}
//                     </tbody>
//                 </table>
//             </div>


//         </div>
//     );
// };

// const StatCard = ({ title, value, icon }) => (
//     <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow flex items-center gap-4">
//         <div className="p-3 bg-blue-100 dark:bg-blue-900 text-blue-600 rounded-xl">
//             {icon}
//         </div>
//         <div>
//             <p className="text-gray-500 text-sm">{title}</p>
//             <p className="text-3xl font-bold">{value}</p>
//         </div>
//     </div>
// );

// export default DashboardHome;


import { useEffect, useState } from "react";
import axios from "axios";
import {
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, CartesianGrid
} from "recharts";
import { Car, CalendarCheck, Inbox, TrendingUp } from "lucide-react";
import { motion } from "framer-motion"; // Animation এর জন্য
import { useAuth } from "../../hooks/useAuth";
import LoadingSpinner from "../../components/LoadingSpinner";

const DashboardHome = () => {
    const { user } = useAuth();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;
        setLoading(true);
        axios
            .get(`https://travelease-vehicle-booking.vercel.app/dashboard/overview?email=${user.email}`)
            .then((res) => setData(res.data))
            .catch((err) => console.error("Dashboard API error:", err))
            .finally(() => setLoading(false));
    }, [user]);

    if (loading || !data) return <LoadingSpinner />;

    const { stats, charts, recentBookings } = data;

    const monthMap = ["", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    const chartData = charts.map((item) => ({
        month: monthMap[item._id],
        vehicles: item.count,
    }));

    // Animation Variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    return (
        <motion.div 
            initial="hidden" 
            animate="visible" 
            variants={containerVariants}
            className="p-4 md:p-8 space-y-8 bg-gray-50 dark:bg-gray-950 min-h-screen"
        >
            {/* Header Section */}
            <div className="flex flex-col gap-1">
                <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Welcome back, {user?.displayName || 'User'}!</h2>
                <p className="text-gray-500">Here is what's happening with your vehicles today.</p>
            </div>

            {/* Overview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <StatCard 
                    title="Vehicles Added" 
                    value={stats.vehiclesCount} 
                    icon={<Car size={24} />} 
                    color="bg-blue-500"
                    variants={itemVariants}
                />
                <StatCard 
                    title="My Bookings" 
                    value={stats.myBookingsCount} 
                    icon={<CalendarCheck size={24} />} 
                    color="bg-purple-500"
                    variants={itemVariants}
                />
                <StatCard 
                    title="Bookings Received" 
                    value={stats.receivedBookingsCount} 
                    icon={<Inbox size={24} />} 
                    color="bg-emerald-500"
                    variants={itemVariants}
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Visual Chart Card */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800">
                    <div className="flex items-center justify-between mb-6">
                        <h3 className="text-lg font-bold flex items-center gap-2">
                            <TrendingUp size={20} className="text-blue-500" /> Activity Analytics
                        </h3>
                    </div>

                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={chartData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#88888844" />
                                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#9CA3AF', fontSize: 12 }} />
                                <Tooltip 
                                    cursor={{ fill: '#f3f4f6', opacity: 0.4 }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
                                />
                                <Bar dataKey="vehicles" radius={[6, 6, 0, 0]} barSize={35}>
                                    {chartData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#3B82F6" : "#8B5CF6"} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Recent Bookings Table */}
                <motion.div variants={itemVariants} className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 overflow-hidden">
                    <h3 className="text-lg font-bold mb-6">Recent Bookings</h3>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead className="text-gray-400 text-sm uppercase tracking-wider">
                                <tr>
                                    <th className="pb-4 font-medium">Vehicle</th>
                                    <th className="pb-4 font-medium">Price</th>
                                    <th className="pb-4 font-medium">Date</th>
                                    <th className="pb-4 font-medium text-right">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                                {recentBookings.map((b) => (
                                    <tr key={b._id} className="group hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                                        <td className="py-4">
                                            <div className="font-medium text-gray-800 dark:text-gray-200">{b.vehicleName}</div>
                                            <div className="text-xs text-gray-500">{b.userEmail}</div>
                                        </td>
                                        <td className="py-4 font-semibold text-blue-600">${b.pricePerDay}</td>
                                        <td className="py-4 text-gray-500 text-sm">{new Date(b.bookedAt).toLocaleDateString()}</td>
                                        <td className="py-4 text-right">
                                            <button className="text-xs bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full hover:bg-blue-500 hover:text-white transition-all">View</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
};

const StatCard = ({ title, value, icon, color, variants }) => (
    <motion.div 
        variants={variants}
        whileHover={{ y: -5 }}
        className="bg-white dark:bg-gray-900 p-6 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-center gap-5"
    >
        <div className={`p-4 ${color} text-white rounded-2xl shadow-lg`}>
            {icon}
        </div>
        <div>
            <p className="text-gray-500 text-sm font-medium">{title}</p>
            <p className="text-3xl font-bold text-gray-800 dark:text-white">{value}</p>
        </div>
    </motion.div>
);

export default DashboardHome;