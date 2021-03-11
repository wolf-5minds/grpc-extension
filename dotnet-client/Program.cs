namespace dotnet_client
{
  using System;
  using System.Threading;
  using System.Threading.Tasks;
  using AtlasEngine.Client.Notifications;
  using Google.Protobuf.WellKnownTypes;
  using Grpc.Core;
  using Microsoft.Extensions.DependencyInjection;

  public static class Program
  {
    public static void Main(string[] args)
    {
      var services = new ServiceCollection();

      services
        .AddGrpcClient<Notifications.NotificationsClient>(o =>
        {
          o.Address = new Uri("http://localhost:50051");
        })
        .ConfigureChannel(o =>
        {
          o.Credentials = ChannelCredentials.Insecure;
        });

      var serviceProvider = services.BuildServiceProvider();

      _ = Task.Run(async () =>
      {
        var client = serviceProvider.GetRequiredService<Notifications.NotificationsClient>();

        using var subscription = client.GetFlowNodeSuspendedNotifications(new Empty());

        while (await subscription.ResponseStream.MoveNext(cancellationToken: CancellationToken.None))
        {
          var newNotification = subscription.ResponseStream.Current;
          Console.WriteLine($"{newNotification.GetType().Name} -- {newNotification.ProcessModelId}, {newNotification.ProcessInstanceId}, {newNotification.FlowNodeId}");
        }
      });

      Console.WriteLine("Wait for notifications to appear; press any key to exit");
      Console.ReadKey(true);
    }
  }
}
