import { useGetLogs } from "@/api/notifications/use-get-logs";
import { formatDate } from "@/utils/app.utils";

export const LogsView = () => {
  const { data: logs, isLoading, error } = useGetLogs();

  if (isLoading) return <p>Cargando logs...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-300 text-sm text-left">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border-b">Sent To</th>
              <th className="px-4 py-2 border-b">Message</th>
              <th className="px-4 py-2 border-b">Channel</th>
              <th className="px-4 py-2 border-b">Sent at</th>
              <th className="px-4 py-2 border-b">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {logs?.map((log) => (
              <tr>
                <td className="px-4 py-2">{log.userName}</td>
                <td className="px-4 py-2">{log.messageContent}</td>
                <td className="px-4 py-2">{log.channel}</td>
                <td className="px-4 py-2">{formatDate(log.sentAt)}</td>
                <td className="px-4 py-2">{log.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
